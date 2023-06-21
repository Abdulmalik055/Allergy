import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();

  const [UserPassword, setPassword] = useState("");
  const [UserEmail, setEmail] = useState("");
  // const [login, setLogin] = useState(localStorage.getItem("loged") === 'true')
  function handelLogout() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("FullUserName");
    localStorage.removeItem("UserEmail");
    localStorage.removeItem('FullAdminName')
    localStorage.removeItem('AdminEmail')
    localStorage.removeItem('id')
    Navigate("/login");
  }
  function submit(event) {
    event.preventDefault();
    axios.post("https://food-free.onrender.com/UserRouter/Userlogin",{
      UserPassword,
      UserEmail,
    })
    .then((res) => {
      console.log(res);
      localStorage.removeItem('token')
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('FullUserName' ,res.data.user.FullUserName)
      localStorage.setItem('UserEmail', res.data.user.UserEmail)
      localStorage.setItem('id', res.data.user._id)
      localStorage.setItem('haveAllergy' ,res.data.user.haveAllergy)
      localStorage.setItem('UserFoodFreetype', res.data.user.UserFoodFreetype)
      console.log(res.data.user._id);
      console.log(res.data.user.UserEmail);
      
      if(res.data.user._id){
        const btnLogout = document.createElement('button')
        btnLogout.onclick = handelLogout.bind()
        btnLogout.className = 'btn-logout'
        btnLogout.textContent = 'تسجيل الخروج'
        document.getElementById('notLoggedIn').replaceWith(btnLogout)
        Navigate("/");
        


        }

      }).catch((err) => {
        console.log('1');
        document.getElementById('userNotFound').style.display = 'block'

      })



    
  }

  return (
    <div id="test">
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
              <button >دخول</button>
              <p id="userNotFound">معلومات التسجيل خاطئه</p>
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
