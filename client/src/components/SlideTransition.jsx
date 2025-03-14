import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function SlideTransition({ children }) {
  const location = useLocation();
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setDirection(1);
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ x: direction * 100, opacity: 0, scale: 0.98 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: direction * -100, opacity: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default SlideTransition;
