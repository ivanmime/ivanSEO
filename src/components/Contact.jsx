import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMapPin, FiLinkedin, FiSend, FiCheck, FiPhone } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Auditoría SEO Técnica",
    "Estrategia de Contenido SEO",
    "SEO Local",
    "SEO Internacional",
    "Automatización SEO",
    "Consultoría SEO Mensual",
    "Otro (especificar en mensaje)"
  ];

  const budgetRanges = [
    "< 1.000€",
    "1.000€ - 3.000€",
    "3.000€ - 5.000€",
    "5.000€ - 10.000€",
    "> 10.000€",
    "Proyecto a largo plazo"
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ¿Listo para llevar tu SEO al siguiente nivel? Solicita tu consulta gratuita y descubre cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <SafeIcon icon={FiMapPin} className="mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="opacity-90">A Coruña, Galicia, España</p>
                    <p className="opacity-75 text-sm">Trabajo con clientes globalmente</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <SafeIcon icon={FiMail} className="mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">seo@expert.com</p>
                    <p className="opacity-75 text-sm">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <SafeIcon icon={FiLinkedin} className="mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <p className="opacity-90">linkedin.com/in/seoexpert</p>
                    <p className="opacity-75 text-sm">Conectemos profesionalmente</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Disponibilidad</h4>
                <p className="text-sm opacity-90 mb-2">
                  <strong>Consulta gratuita:</strong> 30 minutos
                </p>
                <p className="text-sm opacity-90 mb-2">
                  <strong>Horario:</strong> Lun-Vie 9:00-18:00 CET
                </p>
                <p className="text-sm opacity-90">
                  <strong>Respuesta:</strong> Máximo 24 horas
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="https://tuwebsite.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Presupuesto Estimado
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Selecciona un rango</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto, objetivos SEO y qué te gustaría conseguir..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitted
                    ? 'bg-secondary-500 text-white'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
                whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <SafeIcon icon={FiCheck} className="mr-2" />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>

              <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 text-center">
                Al enviar este formulario, aceptas que te contacte para discutir tu proyecto. 
                No spam, solo contenido relevante.
              </p>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Preguntas Frecuentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "¿Cuánto tiempo tardan en verse los resultados SEO?",
                answer: "Normalmente entre 3-6 meses para ver mejoras significativas, aunque algunos cambios técnicos pueden mostrar resultados en semanas."
              },
              {
                question: "¿Trabajas con empresas de cualquier tamaño?",
                answer: "Sí, desde startups locales hasta empresas internacionales. Adapto la estrategia al tamaño y presupuesto de cada cliente."
              },
              {
                question: "¿Incluyes reportes de seguimiento?",
                answer: "Absolutamente. Proporciono reportes mensuales detallados con métricas clave y recomendaciones de mejora."
              },
              {
                question: "¿Ofreces garantías de resultados?",
                answer: "No prometo posiciones específicas, pero sí garantizo trabajo profesional basado en mejores prácticas y transparencia total."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;