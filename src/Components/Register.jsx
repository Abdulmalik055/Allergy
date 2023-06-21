import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const Navigate = useNavigate();

  const [FullUserName, setUsername] = useState("");
  const [UserPassword, setPassword] = useState("");
  const [UserEmail, setEmail] = useState("");
  const [haveAllergy, setHaveAllergy] = useState(false);
  // const [UserfoodType, setType] = useState([]);
  const [UserFoodFreetype, setAllergens] = useState({
    gluten: false,
    milk: false,
    egg: false,
    fish: false,
  });

  console.log(FullUserName);
  function submit(event) {
    event.preventDefault();

    //  ========= | to array | =========
    const checkedAllergens = Object.entries(UserFoodFreetype)
    .filter(([_, isChecked]) => isChecked)
    .map(([allergen, _]) => allergen);

    axios
      .post("https://food-free.onrender.com/UserRouter/UserRegister", {
        FullUserName,
        UserPassword,
        UserEmail,
        haveAllergy,
        UserFoodFreetype : checkedAllergens,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("id", res.data.id);
      });

    Navigate("/");
  }
    // this is for checkbox
  const handleAllergenChange = (e) => {
    setAllergens({ ...UserFoodFreetype, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <div>
        <div className="registerParent">
          <form onSubmit={submit} className="register">
            <h1>التسجيل</h1>
            <label>الاسم المستخدم : </label>
            <input
              type="text"
              placeholder="اسم المستخدم..."
              value={FullUserName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>كلمة المرور : </label>
            <input
              type="password"
              placeholder="كلمة المرور ..."
              value={UserPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>الإيميل الالكتروني :</label>
            <input
              type="text"
              placeholder="الإيميل الالكتروني ..."
              value={UserEmail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="selecter">
              هل أنت مصاب بحساسية :
              <select
                value={haveAllergy.toString()}
                onChange={(e) => setHaveAllergy(e.target.value === "true")}
              >
                <option> </option>
                <option value={true}>نعم</option>
                <option value={false}>لا</option>
              </select>
            </div>
            <div className="checkboxParent">
              نوع الحساسية :
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="gluten"
                  checked={UserFoodFreetype.gluten}
                  onChange={handleAllergenChange}
                />
                <label htmlFor="">جلوتين</label>

                <input
                  type="checkbox"
                  name="milk"
                  checked={UserFoodFreetype.milk}
                  onChange={handleAllergenChange}
                />
                <label htmlFor="">حليب</label>

                <input
                  type="checkbox"
                  name="egg"
                  checked={UserFoodFreetype.egg}
                  onChange={handleAllergenChange}
                />
                <label htmlFor="">بيض</label>

                <input
                  type="checkbox"
                  name="fish"
                  checked={UserFoodFreetype.fish}
                  onChange={handleAllergenChange}
                />
                <label htmlFor="">سمك</label>
              </div>
            </div>
            <div className="submit_btn">
              <button>تسجيل</button>
            </div>
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
