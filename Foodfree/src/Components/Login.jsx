function Login() {
  return (
    <div>
      <div>
        <div className="registerParent">
          <form className="register">
            <h1>تسجيل الدخول</h1>


            <label>الإيميل الالكتروني :</label>
            <input type="text" placeholder="الإيميل الالكتروني ..." />
            <label>كلمة المرور : </label>
            <input type="text" placeholder="كلمة المرور ..." />

            <div className="submit_btn">
              <button>تسجيل</button>
            </div>

            <p>
              ليس لديك حساب؟ <a href="/register"> إنشاء حساب</a>
            </p>
            {/* <p > لديك حساب؟ <a href="/login"> تسجيل دخول</a></p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
