import "./BottomNavbar.css";
import {
  IoHome,
  IoReceiptOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

function BottomNavbar() {
  return (
    <nav className="bottom-nav">

      <div className="nav-item active">
        <IoHome />
        <span>Home</span>
      </div>

      <div className="nav-item">
        <IoReceiptOutline />
        <span>Orders</span>
      </div>

      <div className="nav-item">
        <FaRegHeart />
        <span>Favorites</span>
      </div>

      <div className="nav-item">
        <IoPersonOutline />
        <span>Profile</span>
      </div>

    </nav>
  );
}

export default BottomNavbar;