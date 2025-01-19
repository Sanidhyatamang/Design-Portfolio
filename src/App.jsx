import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'; // Import Portfolio component
import { motion } from 'framer-motion'; 

const App = () => {
  return (
    <Router>
      <div className="over-flow-x-hidden text-neutral-300 
      antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen 
          bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
          rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
    
        <div className="container mx-auto px-8 overflow-x-hidden h-screen grid">
          <Navbar />
          <Routes>
            {/* Define routes */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  
                  <div className="flex justify-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="font-serif border-2 font-thin border-transparent text-black px-5 py-1 rounded-full border-white transition hover:scale-110 duration-300 bg-white text-black"
                    >
                      <Link to="/portfolio">Portfolio</Link>
                    </motion.button>
                  </div>

                  <Contact />
                </>
              }
            />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
