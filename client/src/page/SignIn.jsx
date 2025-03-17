import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../firebase.config/Email.Auth";
import closedEye from "/src/assets/images/closed eye.svg";
import password from "/src/assets/images/mdi_password.svg";
import emailNonFill from "/src/assets/images/email-nonfill.svg";
import Auth from "../firebase.config/Auth";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { user, error } = await signInUser(formData.email, formData.password);
    if (error) {
      setError(error);
      return;
    }

    console.log("User signed in:", user);
    navigate("/home-screen");
  };

  return (
    <div className="SignIn">
      <div className="Welcome">
        <p>Hi</p>
        <h2>Welcome Back!</h2>
        <p>Log in to continue</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors */}
      <form onSubmit={handleSubmit} className="Entry">
        <div className="Icons">
          <img src={emailNonFill} alt="" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="Icons">
          <img src={password} alt="" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <img src={closedEye} alt="" className="EyeLogin" />
        </div>
        <div className="ForgotPassword">
          <div className="Remember">
            <input type="checkbox" name="rememberMe" id="CheckBox" />
            Remember me
          </div>
          <p>Forgot password?</p>
        </div>
        <button type="submit">LOGIN</button>

        <div className="CreateAccount">
          <p>
            Don't have an account?
            <span onClick={() => navigate("/signup-screen")}> Sign up</span>
          </p>
        </div>
      </form>
      <Auth />
    </div>
  );
}

export default SignIn;
