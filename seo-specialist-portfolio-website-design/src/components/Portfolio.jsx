import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../context/LanguageContext';

const { FiExternalLink, FiTrendingUp, FiUsers, FiGlobe } = FiIcons;

const Portfolio = () => {
  const { t, language } = useLanguage();

  const projectsData = {
    es: [
      {
        category: "Freelance - SEO Local",
        title: "Black Mamba Tattoo & Remove",
        url: "https://blackmambatattoo.es/",
        description: "Estudio de tatuajes y eliminación láser en A Coruña. Proyecto completo de SEO local y nacional para posicionar el negocio en búsquedas relacionadas con tatuajes y eliminación.",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=300&fit=crop",
        results: [
          { metric: "Posicionamiento", value: "#1 Local" },
          { metric: "Tráfico orgánico", value: "+180%" },
          { metric: "Conversiones", value: "+250%" }
        ],
        technologies: ["SEO Local", "Google My Business", "Schema Markup", "Technical SEO"]
      },
      {
        category: "Freelance - SEO Local",
        title: "Luciana & Lo",
        url: "https://lucianaylo.com/",
        description: "Salón de manicura y pedicura premium. Estrategia integral de SEO local y optimización de Google My Business para aumentar reservas y visibilidad en búsquedas locales.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=300&fit=crop",
        results: [
          { metric: "Reservas online", value: "+200%" },
          { metric: "Visibilidad local", value: "+300%" },
          { metric: "Reseñas Google", value: "4.9/5" }
        ],
        technologies: ["SEO Local", "Google My Business", "Local Citations", "Review Management"]
      }
    ],
    en: [
      {
        category: "Freelance - Local SEO",
        title: "Black Mamba Tattoo & Remove",
        url: "https://blackmambatattoo.es/",
        description: "Tattoo studio and laser removal in A Coruña. Complete local and national SEO project to position the business in tattoo and removal related searches.",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=500&h=300&fit=crop",
        results: [
          { metric: "Ranking", value: "#1 Local" },
          { metric: "Organic Traffic", value: "+180%" },
          { metric: "Conversions", value: "+250%" }
        ],
        technologies: ["Local SEO", "Google My Business", "Schema Markup", "Technical SEO"]
      },
      {
        category: "Freelance - Local SEO",
        title: "Luciana & Lo",
        url: "https://lucianaylo.com/",
        description: "Premium manicure and pedicure salon. Comprehensive local SEO strategy and Google My Business optimization to increase bookings and visibility in local searches.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=300&fit=crop",
        results: [
          { metric: "Online Bookings", value: "+200%" },
          { metric: "Local Visibility", value: "+300%" },
          { metric: "Google Reviews", value: "4.9/5" }
        ],
        technologies: ["Local SEO", "Google My Business", "Local Citations", "Review Management"]
      }
    ]
  };

  const projects = projectsData[language] || projectsData.es;

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 text-gray-700 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <SafeIcon icon={FiExternalLink} size={20} />
                </a>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="text-center bg-white dark:bg-gray-900 p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Experience Mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('portfolio.corporate.title')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {t('portfolio.corporate.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Tech.co</span>
              <span>•</span>
              <span>Expert Market</span>
              <span>•</span>
              <span>Startups.co.uk</span>
              <span>•</span>
              <span>The Eco Experts</span>
              <span>•</span>
              <span>{language === 'es' ? 'Y más...' : 'And more...'}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('portfolio.cta.title')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('portfolio.cta.subtitle')}
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('portfolio.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;