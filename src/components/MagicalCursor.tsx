import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagicalCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Transform values for cursor effects
  const scale = useTransform(cursorY, [0, window.innerHeight], [0.9, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Main Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
          style={{ scale }}
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-full h-full bg-white rounded-full border-2 border-gray-300 shadow-lg" />
        </motion.div>
      </motion.div>



      {/* Hover Sparkles */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-16 h-16 -translate-x-1/2 -translate-y-1/2">
          <svg width="64" height="64" viewBox="0 0 64 64">
            {/* Sparkle 1 - Top */}
            <motion.polygon
              points="32,8 34,12 32,16 30,12"
              fill="gold"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Sparkle 2 - Right */}
            <motion.polygon
              points="56,32 52,34 48,32 52,30"
              fill="cyan"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            {/* Sparkle 3 - Bottom */}
            <motion.polygon
              points="32,56 30,52 26,50 30,48"
              fill="magenta"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />
            {/* Sparkle 4 - Left */}
            <motion.polygon
              points="8,32 12,30 16,32 12,34"
              fill="yellow"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
            />
            {/* Sparkle 5 - Top Right */}
            <motion.polygon
              points="44,20 42,24 38,22 42,18"
              fill="lime"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
            {/* Sparkle 6 - Bottom Left */}
            <motion.polygon
              points="20,44 22,40 26,42 22,46"
              fill="orange"
              className="drop-shadow-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
} 