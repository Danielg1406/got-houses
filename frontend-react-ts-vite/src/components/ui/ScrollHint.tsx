import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollHint: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute bottom-12 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src="/sword.svg"
        alt="Scroll down"
        className="w-8 h-12 text-neutral-200"
      />
      <div className="scroll-hint text-neutral-400 font-serif mt-2">Scroll</div>
    </motion.div>
  );
};

export default ScrollHint;
