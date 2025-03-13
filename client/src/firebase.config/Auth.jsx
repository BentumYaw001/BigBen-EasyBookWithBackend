import { auth, provider } from "./FirebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function Auth() {
  const navigate = useNavigate();
  // const SignInWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     cookies.set("auth-tokens", result.user.refreshToken, { path: "/" });
  //     navigate("/home-screen");
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //   }
  // };

  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user) {
        console.error("No user data received from Google Auth");
        return;
      }

      // Extract the surname
      const fullName = user.displayName || ""; // Ensure it's a string
      const nameParts = fullName.split(" ");
      const surname =
        nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName; // Last name or fallback

      // Store token safely
      cookies.set("auth-tokens", user.refreshToken, { path: "/" });

      // Store only relevant user data in Zustand
      useAuthStore
        .getState()
        .setUser({ uid: user.uid, displayName: surname, email: user.email });

      console.log("User Surname:", surname);
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
