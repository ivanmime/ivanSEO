import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../context/LanguageContext';

const { FiTool, FiCode, FiGlobe, FiBarChart } = FiIcons;

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      icon: FiTool,
      title: "SEO Tools",
      description: language === 'es' 
        ? "Herramientas especializadas para análisis y optimización"
        : "Specialized tools for analysis and optimization",
      skills: [
        { name: "Google Analytics 4", level: 95 },
        { name: "Google Search Console", level: 98 },
        { name: "Ahrefs", level: 90 },
        { name: "SEMrush", level: 88 },
        { name: "Screaming Frog", level: 92 },
        { name: "Google Tag Manager", level: 85 }
      ]
    },
    {
      icon: FiCode,
      title: language === 'es' ? "Técnico" : "Technical",
      description: language === 'es' 
        ? "Conocimientos técnicos para implementación SEO"
        : "Technical knowledge for SEO implementation",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Python", level: 85 },
        { name: "Schema Markup", level: 92 },
        { name: "Core Web Vitals", level: 88 },
        { name: "Server Configuration", level: 80 }
      ]
    },
    {
      icon: FiGlobe,
      title: language === 'es' ? "Plataformas" : "Platforms",
      description: language === 'es' 
        ? "CMS y plataformas de comercio electrónico"
        : "CMS and e-commerce platforms",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Shopify", level: 88 },
        { name: "HubSpot", level: 85 },
        { name: "Drupal", level: 75 },
        { name: "Magento", level: 70 },
        { name: "Webflow", level: 80 }
      ]
    },
    {
      icon: FiBarChart,
      title: "Analytics & Reporting",
      description: language === 'es' 
        ? "Análisis de datos y reporting avanzado"
        : "Data analysis and advanced reporting",
      skills: [
        { name: "Data Analysis", level: 92 },
        { name: "Google Data Studio", level: 90 },
        { name: "Excel/Google Sheets", level: 95 },
        { name: "Python Data Analysis", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "Automated Reporting", level: 88 }
      ]
    }
  ];

  const languages = [
    { name: language === 'es' ? "Español" : "Spanish", level: language === 'es' ? "Nativo" : "Native", flag: "🇪🇸" },
    { name: language === 'es' ? "Inglés" : "English", level: language === 'es' ? "Fluido (C2)" : "Fluent (C2)", flag: "🇬🇧" },
    { name: language === 'es' ? "Gallego" : "Galician", level: language === 'es' ? "Nativo" : "Native", flag: "🏴󠁥󠁳󠁧󠁡󠁿" }
  ];

  const certifications = [
    "Google Analytics 4 Certified",
    "Google Ads Certified",
    "HubSpot Content Marketing",
    "Technical SEO Specialist",
    "Python for SEO"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mr-4">
                  <SafeIcon icon={category.icon} size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('skills.languages')}
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{lang.flag}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('skills.certifications')}
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;