import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginAdmin() {
  const Navigate = useNavigate();

  const [AdminPassword, setPassword] = useState("");
  const [AdminEmail, setEmail] = useState("");

  function submit(event) {
    event.preventDefault();
    axios.post("https://food-free.onrender.com/AdminRouter/Adminlogin",{
        AdminPassword,
        AdminEmail,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('FullAdminName' ,res.data.Admin.FullAdminName)
        localStorage.setItem('AdminEmail', res.data.Admin.AdminEmail)
        localStorage.setItem('id', res.data.Admin._id)
        console.log(res.data.Admin._id);
        console.log(res.data.Admin.AdminEmail);
        
        if(res.data.Admin._id){
            Navigate("/pending");
        }
      }).catch((err) => {
        document.getElementById('adminNotFound').style.display = 'block'
      })

      

    
  }

  return (
    <div>
      <div>
        <div className="registerParent">
          <form onSubmit={submit} className="register">
            <h1>تسجيل دخول </h1>

            <label>الإيميل الالكتروني :</label>
            <input
              type="text"
              placeholder="الإيميل الالكتروني ..."
              value={AdminEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>كلمة المرور : </label>
            <input
              type="text"
              placeholder="كلمة المرور ..."
              value={AdminPassword}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="submit_btn">
              <button>دخول</button>
              <p id="adminNotFound">معلومات التسجيل خاطئة</p>
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
