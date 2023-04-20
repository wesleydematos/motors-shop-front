import { Route, Routes } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AnnouncementPage from "./pages/AnnouncementPage";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={<Car />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<AnnouncementPage />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
