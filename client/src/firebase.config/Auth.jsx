import { auth, provider } from "./FirebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../page/Store.jsx";
import { useEffect } from "react";

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

      useAuthStore.getState().setFirstName(firstName);
      navigate("/home-screen");
      cookies.set("auth-tokens", user.refreshToken, { path: "/" });
      localStorage.setItem("userName", firstName);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="Auth">
      <button onClick={SignInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Auth;
