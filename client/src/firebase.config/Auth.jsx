import { auth, provider } from "./FirebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function Auth() {
  const navigate = useNavigate();
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-tokens", result.user.refreshToken, { path: "/" });
      // setTrue();
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
