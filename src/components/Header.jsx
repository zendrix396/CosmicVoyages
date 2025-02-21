import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiRocketLine } from "react-icons/ri";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import AuthModal from './AuthModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Destinations", path: "/destinations" },
    { title: "Experiences", path: "/experiences" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-purple-900/10 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="relative">
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-b-2xl blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <RiRocketLine className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                CosmicVoyages
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="text-gray-200 hover:text-white transition-all duration-300 ease-in-out hover:scale-105 relative group"
                >
                  {item.title}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
              >
                Login
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white z-50"
              >
                {!isOpen && <HiOutlineMenuAlt4 className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{
              x: isOpen ? 0 : "-100%",
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-gradient-to-b from-purple-900/95 to-black/95 md:hidden overflow-hidden shadow-2xl rounded-r-2xl border-r border-purple-500/20"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white"
            >
              <HiX className="h-6 w-6" />
            </button>

            <div className="px-6 py-20 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="block text-gray-300 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-purple-400"
                >
                  {item.title}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full mt-8 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all duration-300 ease-in-out shadow-lg hover:shadow-purple-500/50"
              >
                Login
              </motion.button>
            </div>
          </motion.div>

          {/* Overlay for mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </motion.header>
    <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;