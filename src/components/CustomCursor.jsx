import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".card-tech")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: "rgba(255, 140, 0, 1)",
      transition: { type: "tween", duration: 0, ease: "linear" },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1,
      backgroundColor: "rgba(255, 140, 0, 0.1)",
      border: "1px solid rgba(255, 140, 0, 0.8)",
      width: 48,
      height: 48,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const trailVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: { type: "spring", stiffness: 150, damping: 15 },
    },
  };

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body {
            cursor: none;
          }
          a, button, .card-tech, .logo-img {
            cursor: none;
          }
        }
      `}</style>
      
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100] shadow-[0_0_10px_#ff8c00] hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
      
      {/* Cursor Trail/Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#ffb74d] rounded-full pointer-events-none z-[99] hidden md:block"
        variants={trailVariants}
        animate="default"
      />
    </>
  );
};

export default CustomCursor;
