import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';

const { FiMail, FiLinkedin, FiMapPin, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#services', label: 'Servicios' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' }
  ];

  const services = [
    'Auditoría SEO Técnica',
    'Estrategia de Contenido SEO',
    'SEO Local'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialista SEO con 3+ años de experiencia internacional. Transformando visibilidad online en crecimiento de negocio desde A Coruña, Galicia.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <SafeIcon icon={FiMapPin} className="mr-2" />
              A Coruña, Galicia, España
            </div>
            <div className="flex space-x-4">
              <a
                href="mailto:seo@expert.com"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiMail} size={20} />
              </a>
              <a
                href="https://linkedin.com/in/seoexpert"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 p-3 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiLinkedin} size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Newsletter SEO</h4>
            <p className="text-gray-300 mb-6">
              Tips exclusivos y las últimas tendencias SEO
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ivan - SEO Expert. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Términos de Servicio
              </a>
              <motion.button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 p-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiArrowUp} size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;