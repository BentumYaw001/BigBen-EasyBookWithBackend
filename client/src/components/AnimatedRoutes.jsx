import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SlideTransition from "./SlideTransition";
import { RouteData } from "./Data";
import Cookies from "universal-cookie";
import { useEffect } from "react";

const cookies = new Cookies();

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("auth-tokens");
    if (token) {
      navigate("/home-screen");
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {RouteData.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<SlideTransition>{item.page}</SlideTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
