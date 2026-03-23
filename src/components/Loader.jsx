import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Dynamic percentage counter logic
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Randomize the counting speed slightly for a realistic loading feel
      currentProgress += Math.floor(Math.random() * 4) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Brief pause at 100% before triggering the exit animation
        setTimeout(() => {
          setLoading(false);
          setTimeout(onComplete, 1000); // Wait for the exit slide animation to finish
        }, 400); 
      }
      setProgress(currentProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ y: 0 }}
          // Cinematic "Curtain Reveal" Exit
          exit={{ 
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Warm Amber/Orange Ambient Background Glow matching your portfolio */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#FBB040]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Massive Background Percentage Watermark */}
          <motion.div 
            className="absolute right-10 bottom-4 md:bottom-10 text-[15vw] md:text-[10vw] font-black text-white/5 leading-none select-none tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {progress}%
          </motion.div>

          {/* Main Content Container */}
          <div className="flex flex-col items-center justify-center z-10 w-full px-6">
            
            {/* Top Subtitle - Matched to your screenshot */}
            <div className="overflow-hidden mb-3">
              <motion.div 
                className="text-gray-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
              <span className="text-[#FBB040] mx-2">|</span>WELCOME TO
              </motion.div>
            </div>
            
            {/* Main Name Reveal */}
            <div className="overflow-hidden mb-10">
              <motion.h1 
                className="text-white editorial-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-center"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                MY <span className="text-transparent editorial-heading bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#FBB040]">PORTFOLIO</span>
              </motion.h1>
            </div>

            {/* Dynamic Progress Bar */}
            <motion.div 
              className="w-64 md:w-80 h-[2px] bg-white/10 relative overflow-hidden rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#ff8c00] to-[#FBB040]"
                style={{ width: `${progress}%` }}
                layout // Smoothly animates width changes
              />
            </motion.div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;