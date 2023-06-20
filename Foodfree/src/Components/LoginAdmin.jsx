import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginAdmin() {
  const Navigate = useNavigate();

  const [AdminPassword, setPassword] = useState("");
  const [AdminEmail, setEmail] = useState("");

  function submit(event) {
    event.preventDefault();
    axios
      .post("https://food-free.onrender.com/AdminRouter/Adminlogin", {
        AdminPassword,
        AdminEmail,
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.token);
        localStorage.removeItem("FullAdminName");
        localStorage.setItem("FullAdminName", res.data.Admin.FullAdminName);
        localStorage.removeItem("AdminEmail");
        localStorage.setItem("AdminEmail", res.data.Admin.AdminEmail);
        localStorage.removeItem("id");
        localStorage.setItem("id", res.data.Admin._id);
        console.log(res.data.Admin._id);
        console.log(res.data.Admin.AdminEmail);
      });

    Navigate("/pending");
  }

  return (
    <div>
      <div>
        <div className="registerParent">
          <form onSubmit={submit} className="register">
            <h1>تسجيل دخول المسؤول</h1>

            <label>الإيميل الالكتروني :</label>
            <input
              type="text"
              placeholder="الإيميل الالكتروني ..."
              value={AdminEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>كلمة المرور : </label>
            <input
              type="password"
              placeholder="كلمة المرور ..."
              value={AdminPassword}
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

export default LoginAdmin;
