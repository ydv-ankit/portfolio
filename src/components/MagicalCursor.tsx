import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagicalCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 30, stiffness: 700 };
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



      {/* Burst Sparkles */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Sparkle 1 - Top */}
          <motion.div
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 0, 
              y: -40, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
          />
          
          {/* Sparkle 2 - Top Right */}
          <motion.div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 28, 
              y: -28, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.1 
            }}
          />
          
          {/* Sparkle 3 - Right */}
          <motion.div
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 40, 
              y: 0, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
          />
          
          {/* Sparkle 4 - Bottom Right */}
          <motion.div
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 28, 
              y: 28, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.3 
            }}
          />
          
          {/* Sparkle 5 - Bottom */}
          <motion.div
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 0, 
              y: 40, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.4 
            }}
          />
          
          {/* Sparkle 6 - Bottom Left */}
          <motion.div
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -28, 
              y: 28, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.5 
            }}
          />
          
          {/* Sparkle 7 - Left */}
          <motion.div
            className="absolute w-2 h-2 bg-red-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -40, 
              y: 0, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.6 
            }}
          />
          
          {/* Sparkle 8 - Top Left */}
          <motion.div
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -28, 
              y: -28, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.7 
            }}
          />
        </motion.div>
      )}
    </>
  );
} 