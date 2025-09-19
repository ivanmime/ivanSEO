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
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
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
    <Contact />
  </motion.main>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
