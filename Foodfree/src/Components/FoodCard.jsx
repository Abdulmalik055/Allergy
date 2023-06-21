// import React from 'react';
import Sandwich from "../assets/logo.png";
function Card(props) {
  return (
    <div className="Card">
      <div className="image">
        <img src={Sandwich} width={500} />
      </div>

      <div className="content">
        <h3>{props.productName}</h3>
        <h3>{props.productNumber}</h3>
      </div>

      <div className="Location">
        <p>{props.storeLocation}</p>
        <p>{props.distance}</p>
      </div>
    </div>
  );
}

export default Card;
