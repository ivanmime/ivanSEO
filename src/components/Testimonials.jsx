import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Propietaria",
      company: "Black Mamba Tattoo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "El trabajo de SEO ha sido increíble. Pasamos de no aparecer en Google a estar en primera posición para nuestras búsquedas principales. Las citas se han triplicado.",
      rating: 5,
      result: "+250% en conversiones"
    },
    {
      name: "Luciana Pérez",
      role: "Directora",
      company: "Luciana & Lo Nail Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Profesional, eficiente y con resultados medibles. La estrategia de SEO local ha transformado completamente nuestro negocio online.",
      rating: 5,
      result: "+200% en reservas online"
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      company: "Tech Company (UK)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "His technical SEO expertise and automation skills helped us scale our SEO efforts across multiple websites efficiently. Outstanding results.",
      rating: 5,
      result: "+150% organic traffic"
    },
    {
      name: "Sarah Thompson",
      role: "Head of Digital",
      company: "Lead Gen Company",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Working with him on our SEO strategy was game-changing. His international experience and data-driven approach delivered exceptional ROI.",
      rating: 5,
      result: "+180% lead generation"
    },
    {
      name: "Carlos Rodríguez",
      role: "CEO",
      company: "Startup Gallega",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Su conocimiento técnico y capacidad para automatizar procesos nos permitió competir con empresas mucho más grandes. Resultados espectaculares.",
      rating: 5,
      result: "+300% visibilidad online"
    },
    {
      name: "Ana Martín",
      role: "Marketing Manager",
      company: "E-commerce Nacional",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "La estrategia SEO internacional que desarrolló para nosotros nos abrió nuevos mercados. Su experiencia con empresas globales se nota.",
      rating: 5,
      result: "+220% ventas online"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <SafeIcon
            key={i}
            icon={FiStar}
            className={`w-5 h-5 ${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lo que Dicen mis Clientes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Testimonios reales de clientes que han visto crecer sus negocios con mis estrategias SEO
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
                <SafeIcon icon={FiQuote} size={32} />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <blockquote className="text-gray-700 dark:text-gray-300 mt-4 mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="bg-secondary-50 dark:bg-secondary-900/20 p-3 rounded-lg">
                <span className="text-secondary-700 dark:text-secondary-300 font-semibold text-sm">
                  Resultado: {testimonial.result}
                </span>
              </div>
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
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a los clientes que ya están viendo resultados reales con estrategias SEO personalizadas
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar mi Proyecto
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;