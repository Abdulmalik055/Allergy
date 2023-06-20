import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [isAllergic, setIsAllergic] = useState("");
  const [allergens, setAllergens] = useState({
    gluten: false,
    milk: false,
    egg: false,
    fish: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create an array of checked allergens
    const checkedAllergens = Object.entries(allergens)
      .filter(([_, isChecked]) => isChecked)
      .map(([allergen, _]) => allergen);
  

    const header = `Authorization:Bearer ${localStorage.getItem('token')}`
    console.log(checkedAllergens);
    try {
      const response = await axios.post("https://food-free.onrender.com/UserRouter/RequestFoodFree", {
        headers: header,
        Food_Free_Name: productName,
        FoodDescription: productDescription,
        AllergyStatus: isAllergic,
        FoodType: checkedAllergens
      });
      console.log(response);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const handleAllergenChange = (e) => {
    setAllergens({ ...allergens, [e.target.name]: e.target.checked });
  };

  return (
    <div className="AddProduct">
      <form onSubmit={handleSubmit}>
        <label>أسم المنتج:</label>
        <input
          type="text"
          placeholder="أدخل اسم المنتج"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>وصف المنتج:</label>
        <textarea
          cols="10"
          rows="4"
          placeholder="وصف المنتج ..."
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>

        <div className="selecter">
          هل المنتج مسبب للحساسية :
          <select
            value={isAllergic}
            onChange={(e) => setIsAllergic(e.target.value)}
          >
            <option value=""> </option>
            <option value="yes">نعم</option>
            <option value="no">لا</option>
          </select>
        </div>
        <div className="checkboxParent">
          نوع الحساسية :
          <div className="checkbox">
            <input
              type="checkbox"
              name="gluten"
              checked={allergens.gluten}
              onChange={handleAllergenChange}
            />
            <label htmlFor="">جلوتين</label>

            <input
              type="checkbox"
              name="milk"
              checked={allergens.milk}
              onChange={handleAllergenChange}
            />
            <label htmlFor="">حليب</label>

            <input
              type="checkbox"
              name="egg"
              checked={allergens.egg}
              onChange={handleAllergenChange}
            />
            <label htmlFor="">بيض</label>

            <input
              type="checkbox"
              name="fish"
              checked={allergens.fish}
              onChange={handleAllergenChange}
            />
            <label htmlFor="">سمك</label>
          </div>
        </div>
        <div className="submit_btn">
          <button type="submit">أرسل طلب</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
