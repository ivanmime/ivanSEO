import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../context/LanguageContext';

const { FiSearch, FiFileText, FiMapPin } = FiIcons;

const Services = () => {
  const { t, language } = useLanguage();

  const servicesData = {
    es: [
      {
        icon: FiSearch,
        title: "Auditoría SEO Técnica",
        description: "Análisis completo de tu website para identificar oportunidades de mejora técnica y de contenido que impulsen tu posicionamiento orgánico.",
        features: [
          "Análisis técnico completo del sitio web",
          "Evaluación de Core Web Vitals y rendimiento",
          "Revisión de arquitectura web y estructura URLs",
          "Análisis de indexación y rastreabilidad",
          "Informe detallado con prioridades de implementación",
          "Recomendaciones específicas y plan de acción"
        ],
        highlights: ["Análisis profundo", "Plan de acción", "Seguimiento incluido"]
      },
      {
        icon: FiFileText,
        title: "Estrategia de Contenido SEO",
        description: "Desarrollo de estrategias de contenido basadas en keyword research avanzado y análisis competitivo para maximizar tu visibilidad orgánica.",
        features: [
          "Keyword research avanzado y análisis de oportunidades",
          "Análisis competitivo del sector",
          "Estrategia de contenido personalizada",
          "Calendario editorial optimizado para SEO",
          "Optimización de contenido existente",
          "Guías de redacción SEO-friendly"
        ],
        highlights: ["Research completo", "Estrategia personalizada", "Contenido optimizado"]
      },
      {
        icon: FiMapPin,
        title: "SEO Local",
        description: "Optimización especializada para búsquedas locales y gestión completa de Google My Business para negocios con presencia física.",
        features: [
          "Optimización completa de Google My Business",
          "SEO local on-page y technical",
          "Estrategia de citaciones locales",
          "Gestión y optimización de reseñas",
          "Local link building y partnerships",
          "Seguimiento de rankings locales"
        ],
        highlights: ["Google My Business", "Rankings locales", "Gestión de reseñas"]
      }
    ],
    en: [
      {
        icon: FiSearch,
        title: "Technical SEO Audit",
        description: "Complete website analysis to identify technical and content improvement opportunities that boost your organic positioning.",
        features: [
          "Complete technical website analysis",
          "Core Web Vitals and performance evaluation",
          "Web architecture and URL structure review",
          "Indexation and crawlability analysis",
          "Detailed report with implementation priorities",
          "Specific recommendations and action plan"
        ],
        highlights: ["Deep analysis", "Action plan", "Follow-up included"]
      },
      {
        icon: FiFileText,
        title: "SEO Content Strategy",
        description: "Development of content strategies based on advanced keyword research and competitive analysis to maximize your organic visibility.",
        features: [
          "Advanced keyword research and opportunity analysis",
          "Competitive sector analysis",
          "Personalized content strategy",
          "SEO-optimized editorial calendar",
          "Existing content optimization",
          "SEO-friendly writing guides"
        ],
        highlights: ["Complete research", "Custom strategy", "Optimized content"]
      },
      {
        icon: FiMapPin,
        title: "Local SEO",
        description: "Specialized optimization for local searches and complete Google My Business management for businesses with physical presence.",
        features: [
          "Complete Google My Business optimization",
          "Local on-page and technical SEO",
          "Local citations strategy",
          "Review management and optimization",
          "Local link building and partnerships",
          "Local rankings monitoring"
        ],
        highlights: ["Google My Business", "Local rankings", "Review management"]
      }
    ]
  };

  const services = servicesData[language] || servicesData.es;

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={service.icon} size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'es' ? 'Solicitar Información' : 'Request Information'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('services.cta.subtitle')}
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('services.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;