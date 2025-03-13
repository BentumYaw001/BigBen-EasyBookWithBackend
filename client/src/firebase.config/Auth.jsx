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
      const fullName = user.displayName;

      const nameParts = fullName.split(" ");
      const surname = nameParts[nameParts.length - 1];

      cookies.set("auth-tokens", user.refreshToken, { path: "/" });

      useAuthStore.getState().setUser({ ...user, displayName: surname });

      console.log("Surname:", surname);
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
