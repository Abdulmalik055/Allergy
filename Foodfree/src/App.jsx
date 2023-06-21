import { Routes, Route } from "react-router-dom";
{
  /*  Routes = Parent  | Route = children   */
}
import "./App.css";
{
  /* css for style  */
}

{
  /* Import Components   */
}
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import LoginAdmin from './Components/LoginAdmin'
import Homepage from "./Components/Homepage";
import Stores from "./Components/Stores";
{
  /* this component for Location Stores*/
}
import AddProduct from "./Components/addProduct";
{
  /* this component for add product */
}
import Pending from "./Components/pending";
{
  /* this component wite admin accepted */
}
import Profile from "./Components/Profile";
{
  /* this component for edit profile user*/
}
import ProfileUpdate from "./Components/ProfileUpdate";
{
  /* this component for post edit user*/
}
import Community from "./Components/Community";
import NewSub from "./Components/NewSub";

function App() {
  return (
    <>
      <Navbar />

      {/* =========== || all Routes || =========== */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="loginAdmin" element={<LoginAdmin/>}></Route>
        <Route path="community" element={<Community />}></Route>
        <Route path="communityUpdate" element={<NewSub />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="profileUpdate" element={<ProfileUpdate />}></Route>
        <Route path="pending" element={<Pending />}></Route>
        <Route path="addProduct" element={<AddProduct />}></Route>
        <Route path="stores" element={<Stores />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      {/* =========== || all Routes || =========== */}

      <Footer />
    </>
  );
}

export default App;
