import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Results from './components/Results';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import LanguageProvider from './context/LanguageContext';

// Main page component that contains all sections
const MainPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <Hero />
    <Results />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Skills />
    <Blog />
    <Contact />
  </motion.main>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <Routes>
              {/* Redirect root to Spanish by default */}
              <Route path="/" element={<Navigate to="/es" replace />} />
              
              {/* Spanish routes */}
              <Route path="/es" element={<MainPage />} />
              <Route path="/es/*" element={<MainPage />} />
              
              {/* English routes */}
              <Route path="/en" element={<MainPage />} />
              <Route path="/en/*" element={<MainPage />} />
              
              {/* Catch all - redirect to Spanish */}
              <Route path="*" element={<Navigate to="/es" replace />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;