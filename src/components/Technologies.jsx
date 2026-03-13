import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiRedux, SiMysql, SiTypescript, SiCplusplus, SiBootstrap, SiShadcnui } from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const TECH_STACK = [
  { icon: <IoLogoJavascript />, name: "JavaScript", color: "hover:text-[#f7df1e]" },
  { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-[#3178c6]" },
  { icon: <RiReactjsLine />, name: "React", color: "hover:text-[#61dafb]" },
  { icon: <FaNodeJs />, name: "Node.js", color: "hover:text-[#339933]" },
  { icon: <SiExpress />, name: "Express.js", color: "hover:text-white" },
  { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-[#47a248]" },
  { icon: <SiMysql />, name: "MySQL", color: "hover:text-[#4479A1]" },
  { icon: <SiCplusplus />, name: "C/C++", color: "hover:text-[#00599C]" },
  { icon: <SiRedux />, name: "Redux", color: "hover:text-[#764abc]" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "hover:text-[#06b6d4]" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "hover:text-[#7952b3]" },
  { icon: <SiShadcnui />, name: "shadcn/ui", color: "hover:text-white" },
  { icon: <FaGitAlt />, name: "Git", color: "hover:text-[#f34f29]" },
  { icon: <TbApi />, name: "REST APIs", color: "hover:text-white" },
];

function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="border-b border-white/5 pb-16 lg:pb-32 pt-10 lg:pt-20" id="tech-stack">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 flex flex-col items-center"
      >
        <h2 className="section-title text-white mb-6">TECH STACK</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--accent-start)] to-transparent"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto xl:max-w-6xl"
      >
        {TECH_STACK.map((tech, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group flex items-center gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20`}
          >
            <div className={`text-3xl sm:text-4xl text-[var(--text-secondary)] transition-colors duration-300 ${tech.color} shrink-0`}>
              {tech.icon}
            </div>
            <span className="font-space text-xs sm:text-sm md:text-base font-medium text-white/90 group-hover:text-[var(--accent-start)] transition-colors duration-300 break-words line-clamp-2 md:line-clamp-none">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Technologies;
