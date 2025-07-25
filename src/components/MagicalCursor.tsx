import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MagicalCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 800 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Transform values for cursor effects
  const scale = useTransform(cursorY, [0, window.innerHeight], [0.9, 1.1]);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Hide default cursor when custom cursor is active
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }

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

    // Only add mouse event listeners if not mobile
    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleElementHover);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleElementHover);
        // Restore default cursor when component unmounts
        // document.body.style.cursor = 'auto';
      }
    };
  }, [mouseX, mouseY, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main Triangular Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Main Triangle */}
        <motion.div
          className="absolute top-0 left-0 w-0 h-0"
          style={{ scale }}
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Outer Triangle (Glow Effect) */}
          <div 
            className="absolute top-0 left-0 w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '12px solid rgba(0, 212, 255, 0.6)',
              filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))',
            }}
          />
          
          {/* Inner Triangle (Main Cursor) */}
          <div 
            className="absolute top-0 left-0 w-0 h-0"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '10px solid #00d4ff',
            }}
          />
          
          {/* Center Dot */}
          <div 
            className="absolute top-1 left-3 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"
            style={{
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Hover Ring Effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-blue/40"
            style={{
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            }}
          />
        </motion.div>
      )}

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
            className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 0, 
              y: -30, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut" 
            }}
          />
          
          {/* Sparkle 2 - Top Right */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-purple rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 21, 
              y: -21, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.1 
            }}
          />
          
          {/* Sparkle 3 - Right */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-pink rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 30, 
              y: 0, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.2 
            }}
          />
          
          {/* Sparkle 4 - Bottom Right */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-green rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 21, 
              y: 21, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.3 
            }}
          />
          
          {/* Sparkle 5 - Bottom */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-orange rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: 0, 
              y: 30, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.4 
            }}
          />
          
          {/* Sparkle 6 - Bottom Left */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-blue rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -21, 
              y: 21, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.5 
            }}
          />
          
          {/* Sparkle 7 - Left */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -30, 
              y: 0, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.6 
            }}
          />
          
          {/* Sparkle 8 - Top Left */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-neon-purple rounded-full"
            style={{ left: '50%', top: '50%' }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              x: -21, 
              y: -21, 
              opacity: 0, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.7 
            }}
          />
        </motion.div>
      )}
    </>
  );
} 