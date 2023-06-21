import { useState, useEffect } from 'react';
import Sandwich from "../assets/sandwich.png";
import axios from 'axios';
import Card from './FoodCard';

function Homepage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFiltersAndSearch();
  }, [activeFilters, searchTerm]);

  const fetchData = async () => {
    const header = `Authorization:Bearer ${localStorage.getItem('token')}`
    try {
      const response = await axios.get('https://food-free.onrender.com/UserRouter/ListAllFoodfreeforalluser',{
        headers: header
      });
      if(!response.data.errorMessage){
        setData(response.data.FoodFreeData);
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function applyFiltersAndSearch() {
    let filtered = data.filter((item) =>
      activeFilters.every((filter) => item.FoodType.includes(filter))
    );

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.Food_Free_Name.toLowerCase().includes(searchTerm.toLowerCase())||
        item.FoodDescription.toLowerCase().includes(searchTerm.toLowerCase())||
        item.BarcodeID.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleFilter(e) {
    const filterId = e.target.id;
    let newActiveFilters = [...activeFilters];
  
    if (newActiveFilters.includes(filterId)) {
      // If the clicked filter is already active, remove it from the active filters
      newActiveFilters = newActiveFilters.filter((id) => id !== filterId);
      document.getElementById(filterId).className = ''
    } else {
      // If the clicked filter is not active, add it to the active filters
      newActiveFilters.push(filterId);
      document.getElementById(filterId).className = 'filterActive'
    }
  
    setActiveFilters(newActiveFilters);
  
    // Apply all active filters
    const filtered = data.filter((item) =>
      newActiveFilters.every((filter) => !item.FoodType.includes(filter))
    );
  
    setFilteredData(filtered);
  }

  return (
    <div className="homepage">
      <div className="search">
        <input
          type="text"
          placeholder="أدخل رقم الباركود..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="tapfilter">
        <button id="gluten" onClick={handleFilter}>
          جلوتين
        </button>
        <button id="milk" onClick={handleFilter}>
          حليب
        </button>
        <button id="egg" onClick={handleFilter}>
          بيض{" "}
        </button>
        <button id="fish" onClick={handleFilter}>
          سمك
        </button>
      </div>

      <div className="cardsParent">
        {(filteredData.length > 0 ? filteredData : data).map((item, index) => (
          <Card
            key={index}
            productName={item.Food_Free_Name}
            productBarcodeID={item.BarcodeID}
            productDescription={item.FoodDescription}
            productAllergy={item.FoodType}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
