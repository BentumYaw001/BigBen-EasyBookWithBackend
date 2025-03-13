import { useNavigate } from "react-router-dom";

import closedEye from "/src/assets/images/closed eye.svg";
import password from "/src/assets/images/mdi_password.svg";
import emailNonFill from "/src/assets/images/email-nonfill.svg";
import Auth from "../firebase.config/Auth";
import { useAuthStore } from "./Store";

function SignIn() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  return (
    <>
      <div className="SignIn">
        <div className="Welcome">
          <p>Hi {user.displayName}</p>
          <h2>Welcome Back!</h2>
          <p>log in to continue</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="Entry"
        >
          <div className="Icons ">
            <img src={emailNonFill} alt="" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
            />
          </div>
          <div className="Icons ">
            <img src={password} alt="" />
            <input
              type="password"
              name="passwords"
              id="password"
              placeholder="password"
              required
            />
            <img src={closedEye} alt="" className="EyeLogin" />
          </div>
          <div className="ForgotPassword">
            <div className="Remember">
              <input type="checkbox" name="remember me" id="CheckBox" />
              remember me
            </div>
            <p>forgot password?</p>
          </div>
          <Auth />
          <button type="submit" onClick={() => navigate("/home-screen")}>
            LOGIN
          </button>
          <div className="CreateAccount">
            <p>
              Don't have an account?
              <span onClick={() => navigate("/signup-screen")}> signup</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
