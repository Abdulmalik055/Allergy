import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <a href="/"> <img src={Logo} alt="logo" width={58} /> </a>
          <div className="menu">
            <a href="/addProduct">اضافة منتج </a>
            <a href="#">المجتمع </a>
            <a href="/stores">المتاجر</a>
            <a href="/login">تسجيل الدخول </a>
            {/* <a href="#">قبول المنتجات </a> For admin */}
            {/* <a href="/register"> تسجيل</a> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
