import { motion } from "framer-motion";
import { RiRocketLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";

const Starter = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0F]"
    >
      <div className="relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -200, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeOut",
            times: [0, 0.2, 0.7, 1]
          }}
          className="text-center"
        >
          <motion.div className="relative">
            {/* Rocket */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: [0.5, 1.2, 1, 0.8, 0] }}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.5, 0.7, 1],
                ease: "easeInOut",
              }}
              className="relative z-20"
            >
              <RiRocketLine className="h-32 w-32 text-purple-500 mx-auto" />
            </motion.div>

            {/* Rocket glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0], scale: [1, 2, 0] }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1],
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full z-10"
            />

            {/* Star trail effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
              {/* Central star trail */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`central-${i}`}
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    y: [0, -(i * 25 + 50)],
                    scale: [0, 1 + i * 0.1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.08,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                  }}
                  className="absolute"
                >
                  <BsStarFill className="text-purple-400 w-4 h-4" />
                </motion.div>
              ))}

              {/* Left star trail */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`left-${i}`}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: [0, -(i * 20 + 40)],
                    x: [0, -(i * 10 + 20)],
                    scale: [0, 0.8 + i * 0.1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                  }}
                  className="absolute"
                >
                  <BsStarFill className="text-blue-400 w-3 h-3" />
                </motion.div>
              ))}

              {/* Right star trail */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`right-${i}`}
                  initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    y: [0, -(i * 20 + 40)],
                    x: [0, (i * 10 + 20)],
                    scale: [0, 0.8 + i * 0.1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                  }}
                  className="absolute"
                >
                  <BsStarFill className="text-purple-300 w-3 h-3" />
                </motion.div>
              ))}

              {/* Sparkle effects */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100 - 50}px`,
                    top: `${Math.random() * -200}px`,
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Website title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              y: [20, 0, 0, -20],
              scale: [0.9, 1.1, 1.1, 0.9]
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.7, 1],
              ease: "easeOut",
            }}
            className="mt-8 text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            CosmicVoyages
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Starter;