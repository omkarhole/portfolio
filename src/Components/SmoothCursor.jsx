import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === "A" || 
        e.target.tagName === "BUTTON" || 
        e.target.classList.contains("cursor-pointer") ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [x, y]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm"
          animate={{
            scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
            opacity: isClicking ? 0.6 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white mix-blend-difference"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{
            width: "4px",
            height: "4px",
          }}
        />
      </motion.div>
    </>
  );
};

export default SmoothCursor;
