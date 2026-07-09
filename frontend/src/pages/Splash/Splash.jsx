import { Link } from "react-router-dom";
import splashImg from "../../assets/images/splash.png";
import "./Splash.css";

function Splash() {
  return (
    <div className="container-fluid splash-container">
      <div className="row align-items-center min-vh-100">

        {/* Left Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center text-md-start order-2 order-md-1">

          <div className="content-wrapper">

            {/* Logo */}
            <div className="logo-section">
              <h1 className="logo">
                Docuri<span>X</span>
              </h1>
              <div className="logo-line"></div>
            </div>

            {/* Heading */}
            <h2 className="main-title">
              All Digital Services
            </h2>

            <h2 className="sub-title">
              at Your Doorstep
            </h2>

            <p className="description">
              Upload your documents, choose a service and get it delivered to
              your home.
            </p>

            <div className="button-group d-grid gap-3">

              <button className="btn get-started-btn">
                Get Started
              </button>
              
              <Link to='/Login'>
                <button className="btn login-btn">
                  Login
                </button>
              </Link>

            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center order-1 order-md-2">

          <img
            src={splashImg}
            alt="Splash"
            className="img-fluid splash-image"
          />

        </div>

      </div>
    </div>
  );
}

export default Splash;