function AddProduct() {
  return (
    <div className="AddProduct">
      <form>
        <label>أسم المنتج:</label>
        <input type="text" placeholder="أدخل اسم المنتج" />
        <label>وصف المنتج:</label>
        <textarea
          name=""
          id=""
          cols="10"
          rows="4"
          placeholder="وصف المنتج ..."
        ></textarea>

        <div className="selecter">
          هل المنتج مسبب للحساسية :
          <select name="" id="">
            <option value=""> </option>
            <option value="">نعم</option>
            <option value="">لا</option>
          </select>
        </div>
        <div className="checkboxParent">
          نوع الحساسية :
          <div className="checkbox">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">جلوتين</label>

            <input type="checkbox" name="" id="" />
            <label htmlFor="">حليب</label>

            <input type="checkbox" name="" id="" />
            <label htmlFor="">بيض</label>

            <input type="checkbox" name="" id="" />
            <label htmlFor="">سمك</label>
          </div>
        </div>
        <div className="submit_btn">
          <button>أرسل طلب</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
