import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();

  const [UserPassword, setPassword] = useState("");
  const [UserEmail, setEmail] = useState("");

  function submit(event) {
    event.preventDefault();
    axios.post("https://food-free.onrender.com/UserRouter/Userlogin",{
        UserPassword,
        UserEmail,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('email' ,res.data.UserEmail)
        localStorage.setItem("id", res.data._id);
      });

      

    // Navigate("/");
  }

  return (
    <div>
      <div>
        <div className="registerParent">
          <form onSubmit={submit} className="register">
            <h1>تسجيل دخول</h1>

            <label>الإيميل الالكتروني :</label>
            <input
              type="text"
              placeholder="الإيميل الالكتروني ..."
              value={UserEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>كلمة المرور : </label>
            <input
              type="text"
              placeholder="كلمة المرور ..."
              value={UserPassword}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="submit_btn">
              <button>دخول</button>
            </div>
            <p>
              إنشاء حساب؟ <a href="/register"> تسجيل </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
