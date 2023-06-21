// import { useState } from "react";
import Logo from "../assets/logo.png";


function Navbar() {
  // const [login, setLogin] = useState(localStorage.getItem("loged") === 'true')
  
  function handelLogout() {
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("FullUserName");
    window.localStorage.removeItem("UserEmail");
    // setLogin(false)
    window.location.href = ("/login")
  }
  return (
    <div>
      <header>
        <nav>
          <a href="/"> <img src={Logo} alt="logo" width={58} /> </a>
          <div className="menu">
            <a href="/addProduct">اضافة منتج </a>
            <a href="/community">المجتمع </a>
            <a href="/stores">المتاجر</a>
          {!localStorage.getItem("UserEmail") ? (
            <>
            <a href="/login">تسجيل الدخول </a>
            {/* <a href="#">قبول المنتجات </a> For admin */}
            {/* <a href="/register"> تسجيل</a> */}
            </>
        ) : ( <button onClick={handelLogout} className="btn-logout"> Logout </button>)}

          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
