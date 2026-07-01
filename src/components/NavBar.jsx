import "./NavBar.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar-container d-flex justify-content-between align-items-center">

      {/* Left Section */}
      <div>
        <h3 className="fw-bold mb-1">
          Hello, Suman 👋
        </h3>

        <p className="text-secondary d-flex align-items-center mb-0">
          <IoLocationSharp className="me-1 location-icon" />
          Haldia, West Bengal
        </p>
      </div>

      {/* Right Section */}
      <div className="notification-box d-flex justify-content-center align-items-center">
        <FaBell />
      </div>

    </nav>
  );
}

export default NavBar;