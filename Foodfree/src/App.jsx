import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import "./App.css";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Stores from "./Components/Stores";
import AddProduct from "./Components/addProduct";
import Pending from "./Components/pending";
import Profile from "./Components/Profile";
import ProfileUpdate from "./Components/ProfileUpdate";
import Community from "./Components/Community";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="community" element={<Community/>} ></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="profileUpdate" element={<ProfileUpdate/>}></Route>
        <Route path="pending" element={<Pending/>}></Route>
        <Route path="addProduct" element={<AddProduct/>}></Route>
        <Route path="stores" element={<Stores/>}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
