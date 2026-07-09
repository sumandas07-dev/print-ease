import "./RegisterForm.css";

import registerImg from "../assets/images/register.png";

import {
  IoPersonOutline,
  IoMailOutline,
  IoCallOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoShieldCheckmark,
  IoFlash,
  IoHeadset,
} from "react-icons/io5";

import { FaGoogle } from "react-icons/fa";

function RegisterForm() {
  return (
    <>
      {/* ================= Left Section ================= */}

      <div className="col-lg-5 register-left d-none d-lg-flex">

        <div className="left-content">

          {/* Logo */}

          <h2 className="logo mb-5">
            Docuri<span>X</span>
          </h2>

          {/* Heading */}

          <h1 className="fw-bold hero-title">
            Create your account
            <br />
            and get started
          </h1>

          <p className="hero-desc">
            Join DocuriX and access all digital services from the comfort of
            your home.
          </p>

          {/* Illustration */}

          <img
            src={registerImg}
            alt="Register"
            className="img-fluid register-image"
          />

          {/* Features */}

          <div className="features">

            <div className="feature">

              <IoShieldCheckmark className="feature-icon" />

              <div>

                <h6>Secure & Private</h6>

                <small>Your data is safe with us.</small>

              </div>

            </div>

            <div className="feature">

              <IoFlash className="feature-icon" />

              <div>

                <h6>Fast & Easy</h6>

                <small>Register in a few seconds.</small>

              </div>

            </div>

            <div className="feature">

              <IoHeadset className="feature-icon" />

              <div>

                <h6>24/7 Support</h6>

                <small>We're always here to help.</small>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Right Section ================= */}

      <div className="col-lg-7 d-flex align-items-center bg-white">

        <div className="form-wrapper">

          <h1 className="fw-bold mb-2">
            Create Your Account
          </h1>

          <div className="title-line mb-4"></div>

          <p className="text-secondary mb-4">
            Fill in the details below to register.
          </p>

          {/* Full Name */}

          <div className="input-group mb-3">

            <span className="input-group-text">

              <IoPersonOutline />

            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />

          </div>

          {/* Email */}

          <div className="input-group mb-3">

            <span className="input-group-text">

              <IoMailOutline />

            </span>

            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />

          </div>

          {/* Phone */}

          <div className="input-group mb-3">

            <span className="input-group-text">

              <IoCallOutline />

            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />

          </div>

          {/* Password */}

          <div className="input-group mb-3">

            <span className="input-group-text">

              <IoLockClosedOutline />

            </span>

            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />

            <span className="input-group-text">

              <IoEyeOutline />

            </span>

          </div>

          {/* Confirm */}

          <div className="input-group mb-4">

            <span className="input-group-text">

              <IoLockClosedOutline />

            </span>

            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />

            <span className="input-group-text">

              <IoEyeOutline />

            </span>

          </div>

          {/* Button */}

          <button className="btn register-btn w-100 mb-4">
            Create Account →
          </button>

          {/* Divider */}

          <div className="divider mb-4">
            <span>OR</span>
          </div>

          {/* Google */}

          <button className="btn btn-outline-secondary google-btn w-100">

            <FaGoogle className="me-2" />

            Continue with Google

          </button>

          {/* Login */}

          <p className="text-center mt-4">

            Already have an account?

            <a
              href="#"
              className="ms-2 text-decoration-none fw-semibold"
            >
              Login
            </a>

          </p>

        </div>

      </div>
    </>
  );
}

export default RegisterForm;