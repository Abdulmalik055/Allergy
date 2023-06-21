import { useState, useEffect } from 'react';
import Sandwich from "../assets/sandwich.png";
import axios from 'axios';
import Card from './FoodCard';


function Homepage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div className="homepage">
      <div className="search">
        <input type="text" placeholder="أدخل رقم الباركود..." />
        <button>بحث</button>
      </div>

      <div className="tapfilter">
        <a href="">جلوتين</a>
        <a href="">حليب</a>
        <a href="">بيض </a>
        <a href="">سمك</a>
      </div>

        <div className="cardsParent">
          {data.map((item, index) => (
            <Card
              key={index}
              productName={item._id}
              productNumber={item.Food_Free_Name}

            />
          ))}
        </div>

    </div>
  );
}

export default Homepage;
