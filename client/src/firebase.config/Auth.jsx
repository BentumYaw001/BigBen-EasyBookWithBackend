import { auth, provider } from "./FirebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../page/Store.jsx";

const cookies = new Cookies();

function Auth() {
  const navigate = useNavigate();

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const nameParts = user.displayName.split(" ");
      const firstName = nameParts.slice(0, 2).join(" ");

      useAuthStore.getState().setFirstName(firstName);

      cookies.set("auth-tokens", user.refreshToken, { path: "/" });
      localStorage.setItem("userName", firstName);

      console.log("First Name:", firstName);
      navigate("/home-screen");
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
