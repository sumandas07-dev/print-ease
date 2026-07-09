import "./LoginForm.css";

import {
  IoMailOutline,
  IoLockClosedOutline,
  IoEyeOutline,
} from "react-icons/io5";

import { FaGoogle } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login-box">

      <h2 className="brand">
        <span>Docuri</span>X
      </h2>

      <h1 className="welcome">
        Welcome Back!
      </h1>

      <p className="subtitle">
        Please enter your details to sign in.
      </p>

      {/* Email */}

      <label>Email Address</label>

      <div className="input-box">

        <IoMailOutline />

        <input
          type="email"
          placeholder="Enter your email"
        />

      </div>

      {/* Password */}

      <label>Password</label>

      <div className="input-box">

        <IoLockClosedOutline />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <IoEyeOutline className="eye" />

      </div>

      {/* Options */}

      <div className="options">

        <div>

          <input type="checkbox" />

          <span> Remember me</span>

        </div>

        <a href="#">Forgot Password?</a>

      </div>

      {/* Login */}

      <button className="login-btn">
        Sign In
      </button>

      <div className="divider">
        OR
      </div>

      <button className="google-btn">

        <FaGoogle />

        Sign in with Google

      </button>

      <p className="signup">

        Don't have an account?

        <a href="#"> Sign Up</a>

      </p>

    </div>
  );
}

export default LoginForm;