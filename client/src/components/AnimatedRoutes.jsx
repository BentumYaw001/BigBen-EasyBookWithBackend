import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SlideTransition from "./SlideTransition";
import { RouteData } from "./Data";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function AnimatedRoutes() {
  const location = useLocation();
  const authToken = cookies.get("auth-tokens");

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {RouteData.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              authToken ? (
                <Navigate to="/home-screen" replace />
              ) : (
                <SlideTransition>{item.page}</SlideTransition>
              )
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
