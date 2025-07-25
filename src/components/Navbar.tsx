import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "border-b border-neon-blue/20 backdrop-blur-md" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={"/"}>
              <img
                src="/assets/img/ankitydv.png"
                width={110}
                height={5}
                alt="logo"
                className="filter brightness-0 invert"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to={"https://resume.ankitydv.in"}
                target="_blank"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              >
                <span className="relative z-10">RESUME</span>
                <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-blue/20"></div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to={"https://heyankit.hashnode.dev"}
                target="_blank"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              >
                <span className="relative z-10">BLOGS</span>
                <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-blue/20"></div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to={"https://github.com/ydv-ankit"}
                target="_blank"
                className="px-4 py-2 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 relative group"
              >
                <FaGithub className="text-lg" />
                <span className="relative z-10">GITHUB</span>
                <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-blue/20"></div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={"https://github.com/ydv-ankit"} 
                target="_blank"
                className="p-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
              </Link>
            </motion.div>
            
            <motion.button
              onClick={toggleMenu}
              className="p-2 text-neon-cyan hover:text-neon-blue transition-colors duration-300 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative z-10">
                {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </div>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-neon-blue/20"></div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <motion.div 
                className="flex flex-col space-y-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"https://resume.ankitydv.in"}
                    target="_blank"
                    onClick={toggleMenu}
                    className="block px-4 py-3 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 glass rounded-lg border border-neon-blue/10 hover:border-neon-blue/30"
                  >
                    RESUME
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"https://heyankit.hashnode.dev"}
                    target="_blank"
                    onClick={toggleMenu}
                    className="block px-4 py-3 font-tech text-neon-cyan hover:text-neon-blue transition-colors duration-300 glass rounded-lg border border-neon-blue/10 hover:border-neon-blue/30"
                  >
                    BLOGS
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
