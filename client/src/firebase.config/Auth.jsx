import { auth, provider } from "./FirebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../page/Store.jsx";
import { useEffect } from "react";
import googleImage from "/src/assets/images/google.png";

const cookies = new Cookies();

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("auth-tokens");
    console.log(token);
    if (token) {
      navigate("/home-screen");
    }
  }, [navigate]);
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const nameParts = user.displayName.split(" ");
      const firstName = nameParts.slice(0, 2).join(" ");

      localStorage.setItem("userName", firstName);
      useAuthStore.getState().setFirstName(firstName);
      navigate("/home-screen");
      cookies.set("auth-tokens", user.refreshToken, { path: "/" });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="Auth">
      <button onClick={SignInWithGoogle}>
        <img src={googleImage} alt="" /> google{" "}
      </button>
    </div>
  );
}

export default Auth;
