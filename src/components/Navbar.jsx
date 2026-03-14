import logo from '/public/logo.png'
import React from 'react';
import { FaLinkedin, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {

  const iconVariants = {
    hover: {
      scale: 1.25,
      color: "#ffffff",
      filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.6)) drop-shadow(0px 0px 20px rgba(255,255,255,0.4))",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <nav className='flex items-center justify-between py-4'>

      <motion.div
        className='flex flex-shrink-0 items-center'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className='mx-2 w-14'
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))"
            }}
          />
        </a>
      </motion.div>

      <motion.div
        className='mx-8 flex items-center justify-center gap-6 text-2xl text-gray-400'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <motion.a whileHover="hover" variants={iconVariants} href="https://www.linkedin.com/in/shubham-maurya-8b7307289/" target="_blank">
          <FaLinkedin />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://github.com/shubhammaurya0221/" target="_blank">
          <FaGithub />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://www.instagram.com/maurya.shubham_01/" target="_blank">
          <FaInstagram />
        </motion.a>

        <motion.a whileHover="hover" variants={iconVariants} href="https://www.youtube.com/@DuoDeveloper01" target="_blank">
          <FaYoutube />
        </motion.a>

      </motion.div>
    </nav>
  )
}

export default Navbar;
