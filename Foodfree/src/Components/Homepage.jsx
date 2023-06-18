import Sandwich from "../assets/sandwich.png";
function Homepage() {
  return (
    <div className="homepage">
      <div className="search">
        <input type="text" placeholder="أدخل رقم الباركود..." />
        <button>بحث</button>
      </div>

      <div className="tapfilter">
        <a href="">جلوتين</a>
        <a href="">حليب</a>
        <a href="">بيض </a>
        <a href="">سمك</a>
      </div>

      <div className="cardHome">
        <div className="image">
          <img src={Sandwich} width={500} />
        </div>

        <div className="content">
          <h3>عنوان المنتج</h3>
          <h3>رقم المنتج</h3>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>

      <div className="cardHome">
        <div className="image">
          <img src={Sandwich} width={500} />
        </div>

        <div className="content">
          <h3>عنوان المنتج</h3>
          <h3>رقم المنتج</h3>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>

      <div className="cardHome">
        <div className="image">
          <img src={Sandwich} width={500} />
        </div>

        <div className="content">
          <h3>عنوان المنتج</h3>
          <h3>رقم المنتج</h3>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>

      <div className="cardHome">
        <div className="image">
          <img src={Sandwich} width={500} />
        </div>

        <div className="content">
          <h3>عنوان المنتج</h3>
          <h3>رقم المنتج</h3>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
