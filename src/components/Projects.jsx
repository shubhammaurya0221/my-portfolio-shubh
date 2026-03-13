import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Full Stack", "React.js", "Assignment", "Basic Projects"];

  const filteredProjects = activeTab === "All" 
    ? PROJECTS 
    : PROJECTS.filter((project) => project.category === activeTab);

  return (
    <div className="border-b border-white/5 pb-20" id="projects">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 flex flex-col items-center"
      >
        <h2 className="section-title text-white mb-6">PROJECTS</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[var(--accent-start)] to-transparent"></div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 px-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 sm:px-6 py-2 rounded-full font-space text-xs sm:text-sm tracking-widest transition-all duration-300 border ${
              activeTab === cat
                ? "bg-[var(--accent-start)]/10 border-[var(--accent-start)] text-[var(--accent-start)] shadow-[0_0_15px_rgba(255,140,0,0.2)]"
                : "border-white/10 text-[var(--text-secondary)] hover:border-[var(--accent-start)] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.title + index} 
              className="mb-32 flex flex-wrap lg:justify-center items-center group/item"
            >
              <motion.div
                className="w-full lg:w-5/12 lg:pr-12"
              >
                <div className="relative group overflow-hidden rounded-xl border border-white/5 mb-8 lg:mb-0 bg-[#050505] aspect-video flex items-center justify-center shadow-lg">
                  <div className="absolute inset-0 bg-[var(--accent-start)] opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-[var(--accent-start)]/30">
                       <span className="text-5xl font-space mb-3 font-light">{'</>'}</span>
                       <span className="font-space tracking-widest text-sm text-[var(--text-secondary)] uppercase">{project.category}</span>
                    </div>
                  )}
                  
                  {/* Tech overlay brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20 group-hover:border-[var(--accent-start)] transition-colors duration-500 z-20"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20 group-hover:border-[var(--accent-start)] transition-colors duration-500 z-20"></div>
                </div>
              </motion.div>
              
              <motion.div
                className="w-full max-w-xl lg:w-7/12 lg:pl-4 flex flex-col justify-center"
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h6 className="text-2xl sm:text-3xl font-space font-medium text-white group-hover/item:text-[var(--accent-start)] transition-colors relative inline-block">
                     {project.title}
                  </h6>
                  <span className={`px-2 py-1 text-[10px] sm:text-[11px] font-space tracking-widest border rounded-sm ${project.github ? "text-green-400 border-green-500/30 bg-green-500/10" : "text-[var(--accent-end)] border-[var(--accent-end)]/50 bg-[var(--accent-end)]/10"}`}>
                    {project.github ? "STATUS: ACTIVE" : "STATUS: INACTIVE"}
                  </span>
                </div>
                
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-lg mb-8 backdrop-blur-sm relative">
                  <p className="text-[var(--text-secondary)] font-inter font-light tracking-wide leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--accent-start)] to-transparent rounded-full ml-[-1px] opacity-50 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-4 py-1.5 text-xs sm:text-sm font-space text-[var(--text-secondary)] bg-white/5 border border-white/10 rounded-full hover:bg-[var(--accent-start)]/10 hover:border-[var(--accent-start)]/50 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="flex items-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-8 text-xs">
                      VIEW REPOSITORY
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
