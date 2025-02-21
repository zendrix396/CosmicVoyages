import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiRocketLine } from "react-icons/ri";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {item.title}
  </a>
))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
            >
              Login
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt4 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium"
            >
              Login
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
