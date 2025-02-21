
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/header'
import Starter from './components/Starter'
import "./App.css"
import Footer from './components/Footer'

function App() {
  const [showStarter, setShowStarter] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A0A0F] text-white font-space overflow-hidden">
        <AnimatePresence>
          {showStarter && <Starter onComplete={() => setShowStarter(false)} />}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 1.8, // Start fading in slightly before starter completes
            ease: "easeOut"
          }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="fixed inset-0 bg-[url('/stars.png')] pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black/80 pointer-events-none"
          />
          <main className="relative z-10">
            <Header />
            {/* Your other content here */}
            
          </main>
        </motion.div>
      </div>
    </BrowserRouter>
  )
}

export default App