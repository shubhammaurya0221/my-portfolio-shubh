// import React from "react";
// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";

// function Contact() {
//   return (
//     <div className="border-b border-neutral-900 pb-20">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-10 text-center text-4xl"
//       >
//         Get in Touch
//       </motion.h1>
//       <div className="text-center tracking-tight">
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-4"
//         >
//           {CONTACT.address}
//         </motion.p>
//         <motion.p
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//           className="my-4"
//         >
//           {CONTACT.phoneNo}
//         </motion.p>
//         <a href="#" className="">
//           {CONTACT.email}
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="pb-16 lg:pb-32 pt-10 lg:pt-20" id="contact">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
      >
        <h2 className="editorial-heading text-white mb-8 leading-none">
          LET'S <span className="text-gradient">CONNECT</span>
        </h2>
        
        <p className="text-[var(--text-secondary)] font-inter font-light text-lg mb-16 max-w-2xl">
          Interested in collaborating on a project or having a chat about modern web technologies? My inbox is always open.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mb-16 w-full text-sm font-space tracking-widest uppercase text-white/70">
          <a 
            href={`mailto:${CONTACT.email}`}
            className="hover:text-white transition-colors relative hover-underline py-2"
          >
            {CONTACT.email}
          </a>
          <a 
            href="https://linkedin.com/in/shubhammaurya0221" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors relative hover-underline py-2"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/shubhammaurya0221" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors relative hover-underline py-2"
          >
            GitHub
          </a>
        </div>

        <a href={`https://wa.me/917054396198?text=${encodeURIComponent("Hello!")}`} className="btn-primary mt-8">
          SEND MESSAGE
        </a>
      </motion.div>

      {/* Footer minimal text */}
      <div className="mt-32 border-t border-white/5 pt-8 text-center font-space text-[10px] tracking-[0.2em] uppercase text-white/30">
        <p>© {new Date().getFullYear()} Shubham Maurya. Crafted with React, Tailwind & GSAP.</p>
      </div>
    </section>
  );
}

export default Contact;
