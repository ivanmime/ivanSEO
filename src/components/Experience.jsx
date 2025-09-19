import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../context/LanguageContext';

const { FiMapPin, FiCalendar, FiExternalLink, FiUsers } = FiIcons;

const Experience = () => {
  const { t, language } = useLanguage();

  const experiencesData = {
    es: [
      {
        company: "Cushman & Wakefield",
        role: "SEO Specialist - Global Team",
        period: "2024 - Presente",
        location: "Global (Remoto)",
        description: "SEO Specialist en equipo global de una de las consultoras inmobiliarias más importantes del mundo.",
        achievements: [
          "SEO internacional para múltiples mercados",
          "Automatización de procesos SEO con Python",
          "Optimización técnica avanzada",
          "Colaboración con equipos globales"
        ],
        current: true
      },
      {
        company: "MVF - Lead Generation Company",
        role: "SEO Specialist",
        period: "2021 - 2024",
        location: "UK (Remoto)",
        description: "Responsable de SEO para múltiples websites reconocidos en el mercado británico.",
        achievements: [
          "Gestión SEO de 9+ websites premium",
          "Creación de procesos automatizados",
          "Mejora promedio del 150% en tráfico orgánico",
          "Implementación de estrategias técnicas avanzadas"
        ],
        websites: [
          "Tech.co",
          "Expert Market",
          "Startups.co.uk",
          "Inside Lane",
          "The Prep",
          "Mint Pillow",
          "The Eco Experts",
          "Website Builder Expert",
          "Expert Reviews"
        ]
      }
    ],
    en: [
      {
        company: "Cushman & Wakefield",
        role: "SEO Specialist - Global Team",
        period: "2024 - Present",
        location: "Global (Remote)",
        description: "SEO Specialist in the global team of one of the world's most important real estate consultancies.",
        achievements: [
          "International SEO for multiple markets",
          "SEO process automation with Python",
          "Advanced technical optimization",
          "Collaboration with global teams"
        ],
        current: true
      },
      {
        company: "MVF - Lead Generation Company",
        role: "SEO Specialist",
        period: "2021 - 2024",
        location: "UK (Remote)",
        description: "Responsible for SEO across multiple recognized websites in the British market.",
        achievements: [
          "SEO management of 9+ premium websites",
          "Creation of automated processes",
          "Average 150% improvement in organic traffic",
          "Implementation of advanced technical strategies"
        ],
        websites: [
          "Tech.co",
          "Expert Market",
          "Startups.co.uk",
          "Inside Lane",
          "The Prep",
          "Mint Pillow",
          "The Eco Experts",
          "Website Builder Expert",
          "Expert Reviews"
        ]
      }
    ]
  };

  const freelanceProjectsData = {
    es: [
      {
        name: "Black Mamba Tattoo & Remove",
        url: "https://blackmambatattoo.es/",
        description: "SEO local y nacional para estudio de tatuajes y eliminación láser",
        results: "Posicionamiento #1 en búsquedas locales"
      },
      {
        name: "Luciana & Lo",
        url: "https://lucianaylo.com/",
        description: "SEO local y Google My Business para salón de manicura",
        results: "Incremento 200% en reservas online"
      }
    ],
    en: [
      {
        name: "Black Mamba Tattoo & Remove",
        url: "https://blackmambatattoo.es/",
        description: "Local and national SEO for tattoo studio and laser removal",
        results: "#1 ranking in local searches"
      },
      {
        name: "Luciana & Lo",
        url: "https://lucianaylo.com/",
        description: "Local SEO and Google My Business for manicure salon",
        results: "200% increase in online bookings"
      }
    ]
  };

  const experiences = experiencesData[language] || experiencesData.es;
  const freelanceProjects = freelanceProjectsData[language] || freelanceProjectsData.es;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Corporate Experience */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl shadow-lg ${
                exp.current 
                  ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-2 border-primary-200 dark:border-primary-700' 
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              {exp.current && (
                <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t('experience.current')}
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <SafeIcon icon={FiMapPin} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {exp.description}
                  </p>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {t('experience.achievements')}
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {exp.websites && (
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <SafeIcon icon={FiUsers} className="mr-2" />
                      {t('experience.websites')}
                    </h5>
                    <div className="grid grid-cols-1 gap-2">
                      {exp.websites.map((website, i) => (
                        <div key={i} className="bg-white dark:bg-gray-700 p-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300">
                          {website}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Freelance Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('experience.freelance')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelanceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    <SafeIcon icon={FiExternalLink} size={20} />
                  </a>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="bg-secondary-50 dark:bg-secondary-900/20 p-3 rounded-lg">
                  <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
                    {language === 'es' ? 'Resultado: ' : 'Result: '}{project.results}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;