import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

const { FiArrowDown, FiMapPin, FiTrendingUp } = FiIcons;

const Hero = () => {
  const { t } = useLanguage();

  const scrollToResults = () => {
    document.querySelector('#results').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Logo size="xl" showText={false} />
              {/* Add subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Ivan — <span className="text-primary-600 dark:text-primary-400">{t('hero.title')}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="block text-primary-600 dark:text-primary-400 text-3xl md:text-5xl mt-2 font-semibold mb-6"
          >
            {t('hero.subtitle')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-8 text-lg"
          >
            <SafeIcon icon={FiMapPin} className="mr-2" />
            {t('hero.location')}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">MVF</span> y{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">Cushman & Wakefield</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToResults}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors flex items-center group shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta1')}
              <SafeIcon icon={FiTrendingUp} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta2')}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16"
          >
            <button
              onClick={scrollToResults}
              className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce-slow"
            >
              <SafeIcon icon={FiArrowDown} size={32} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
