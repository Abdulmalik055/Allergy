import React, { useState, useEffect } from 'react';
import Sandwich from "../assets/sandwich.png";
import axios from 'axios';
import Card from './FoodCard';


function Homepage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6486d1bcbeba6297278f395e.mockapi.io/Login');
      setData(response.data);
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
              productName={item.id}
              productNumber={item.name}
              storeLocation={item.password}
              distance={item.distance}
            />
          ))}
        </div>

    </div>
  );
}

export default Homepage;
