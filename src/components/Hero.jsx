import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 mb-16 md:mb-32 overflow-hidden -mt-20" id="home">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-screen opacity-60">
        <motion.div 
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1, 0.8, 1],
            borderRadius: ["20%", "50%", "30%", "50%", "20%"]
          }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="absolute w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] opacity-10 blur-3xl"
        />
        <motion.div 
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [0.8, 1, 1.2, 1, 0.8],
          }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] border border-white/5 rounded-full"
        />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--accent-end)]/10 rounded-full blur-2xl flex items-center justify-center text-xs"></div>
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden mb-6"
        >
          <span className="text-secondary font-space text-[10px] sm:text-xs tracking-[0.4em] uppercase block">
            Software Engineer // MERN Stack
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="editorial-heading text-white flex flex-col gap-0 sm:gap-2 mb-8"
        >
          <span className="block overflow-hidden"><span className="block tracking-tighter">FULL STACK</span></span>
          <span className="block overflow-hidden"><span className="block text-gradient tracking-tighter">DEVELOPER</span></span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-space text-lg sm:text-3xl lg:text-4xl text-white/90 uppercase tracking-widest font-light mb-8 max-w-4xl"
        >
          Building Modern Web Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="max-w-xl text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed font-inter"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-8 justify-center sm:justify-start items-center"
        >
          <a href="#projects" className="btn-primary">
            VIEW WORK
          </a>
          <a href="#contact" className="text-white hover-underline font-space py-2 tracking-[0.2em] text-xs uppercase self-center cursor-pointer transition-colors hover:text-[var(--accent-start)]">
            CONTACT ME
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-[var(--text-secondary)] font-space uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[var(--accent-start)]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
