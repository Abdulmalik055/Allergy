// import React from 'react';
import Sandwich from "../assets/logo.png";
function Card(props) {
  let allergyArray = []
  for(let i = 0; i< props.productAllergy.length; i++){
    if(i == props.productAllergy.length-1){
      allergyArray += (props.productAllergy[i])
    }else{
      allergyArray += (props.productAllergy[i] + ',')
    }
    
  }
  
  console.log(props.productAllergy);
  return (
    <div className="Card">
      <div className="image">
        <img src={Sandwich} width={500} />
      </div>

      <div className="content">
        <h3>عنوان المنتج:  {props.productName}</h3>
        <h3>باركود المنتج:  {props.productBarcodeID}</h3>
        <h3>وصف المنتج:  {props.productDescription}</h3>
        <h3>معلومات الحساسية:  {allergyArray}</h3>
      </div>

      <div className="Location">
        <p>{props.storeLocation}</p>
        <p>{props.distance}</p>
      </div>
    </div>
  );
}

export default Card;
