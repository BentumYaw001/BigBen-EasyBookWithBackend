import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "./page/SplashScreen";
import { useSplashStore } from "./page/Store";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const { loading, setLoading } = useSplashStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="App">
      <Router>{loading ? <SplashScreen /> : <AnimatedRoutes />}</Router>
    </div>
  );
}

export default App;
