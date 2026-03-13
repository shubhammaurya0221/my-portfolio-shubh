import React, { useState } from "react";
import { ReactLenis } from 'lenis/react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="overflow-x-hidden text-[var(--text-secondary)] antialiased font-space selection:bg-[var(--accent-start)] selection:text-white min-h-screen">
          <CustomCursor />
          
          {/* Abstract background noise overlay */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 mt-20">
            <div className="fixed top-0 left-0 right-0 z-40 glass-nav pointer-events-auto">
              <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <Navbar />
              </div>
            </div>
            
            <main className="flex flex-col gap-12 md:gap-24 pb-24 relative">
              <Hero />
              <About />
              <Technologies />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
      )}
    </ReactLenis>
  );
}

export default App;
