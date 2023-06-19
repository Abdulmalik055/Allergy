import Bakery from "../assets/gluten-free-bakery.jpg";
function Stores() {
  return (
    <div className="homepage">
      <h1>المتاجر</h1>
      <div className="cardHome">
        <div className="imageStore">
          <img src={Bakery} width={500} />
        </div>

        <div className="content">
          <h3>خبزي الخالي</h3>
          <a href="https://goo.gl/maps/YCH15R81GeysJyx2A">
            <h3>رابط اللوكيشن</h3>
          </a>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>

      <div className="cardHome">
        <div className="imageStore">
          <img src={Bakery} width={500} />
        </div>

        <div className="content">
          <h3>خبزي الخالي</h3>
          <a href="https://goo.gl/maps/YCH15R81GeysJyx2A">
            <h3>رابط اللوكيشن</h3>
          </a>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>

      <div className="cardHome">
        <div className="imageStore">
          <img src={Bakery} width={500} />
        </div>

        <div className="content">
          <h3>خبزي الخالي</h3>
          <a href="https://goo.gl/maps/YCH15R81GeysJyx2A">
            <h3>رابط اللوكيشن</h3>
          </a>
        </div>

        <div className="Location">
          <p>عنوان الموقع</p>
          <p>4km 15min</p>
        </div>
      </div>
    </div>
  );
}

export default Stores;
