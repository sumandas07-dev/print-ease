import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Splash from "./pages/Splash/Splash";
import SelectService from "./pages/SelectService/SelectService";
import Upload from "./pages/Upload/Upload";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Service" element={<SelectService />} />
        <Route path="/upload" element={<Upload />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<ConfirmOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;