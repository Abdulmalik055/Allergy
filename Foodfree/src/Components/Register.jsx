function Register() {



  return (
    <div>
      <div>
        <div className="registerParent">
          <form className="register">
            <h1>التسجيل</h1>

            <label>الاسم المستخدم : </label>
            <input type="text" placeholder="اسم المستخدم..." />
            <label>كلمة المرور : </label>
            <input type="text" placeholder="كلمة المرور ..." />
            <label>الإيميل الالكتروني :</label>
            <input type="text" placeholder="الإيميل الالكتروني ..." />

            <div className="selecter">
              هل أنت مصاب بحساسية :
              <select name="" id="">
                <option value=""> </option>
                <option value="">نعم</option>
                <option value="">لا</option>
              </select>
            </div>
            <div className="checkboxParent">
              حدد الحساسية المصاب بها :
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
              <button>تسجيل</button>
            </div>

            {/* <p>ليس لديك حساب؟ <a href="/register"> إنشاء حساب</a></p> */}
            <p>
              لديك حساب؟ <a href="/login"> تسجيل دخول</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
