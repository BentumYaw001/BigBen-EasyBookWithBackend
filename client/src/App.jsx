import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "./page/SplashScreen";
import { useSplashStore } from "./page/Store";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const { loading, setLoading } = useSplashStore();
  // const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  // useEffect(() => {
  //   const token = cookies.get("auth-tokens");
  //   if (token) {
  //     navigate("/home-screen");
  //   }
  // }, [navigate]);
  return (
    <div className="App">
      <Router>{loading ? <SplashScreen /> : <AnimatedRoutes />}</Router>
    </div>
  );
}

export default App;
