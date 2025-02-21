import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiRocketLine, RiCloseLine } from "react-icons/ri";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLogin(!isLogin);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-[#0A0A0F]/90 rounded-2xl border border-purple-500/20 shadow-xl shadow-purple-500/10 backdrop-blur-xl w-full max-w-md p-6 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-[500px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <RiRocketLine className="h-12 w-12 text-purple-500" />
                </div>

                <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {isLogin ? "Welcome Back!" : "Create Account"}
                </h2>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                  </motion.button>

                  <div className="text-center mt-4">
                    <motion.button
                      onClick={toggleMode}
                      whileHover={{ scale: 1.02 }}
                      className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300 relative group"
                    >
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <span className="font-semibold">
                        {isLogin ? "Register here" : "Sign in"}
                      </span>
                      <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;