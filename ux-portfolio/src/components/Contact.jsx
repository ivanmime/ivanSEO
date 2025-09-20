import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiLinkedin, FiCalendar, FiSend, FiDownload } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para vender más online? Agenda una llamada gratuita y conversemos sobre 
            cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cuéntame sobre tu proyecto
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de proyecto *
                </label>
                <select
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un tipo de proyecto</option>
                  <option value="auditoria">Auditoría Web + Ventas</option>
                  <option value="landing">Página Web WordPress</option>
                  <option value="sprint">Proyecto Digital Completo</option>
                  <option value="consultoria">Consultoría Flexible</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntame sobre tu proyecto *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Describe tu proyecto, objetivos y timeline..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contacto directo
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:calvarezg54@gmail.com"
                  className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <SafeIcon icon={FiMail} className="w-5 h-5" />
                  <span>calvarezg54@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/cynthia-alva-ga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Calendar CTA */}
            <div className="bg-gradient-to-br from-purple-600 to-green-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Agenda una llamada gratuita
              </h3>
              <p className="mb-6 opacity-90">
                15 minutos para conocer tu proyecto y ver cómo puedo ayudarte. Sin compromiso.
              </p>
              <motion.a
                href="https://calendar.app.google/VHmgJrSrsmdK79x8A"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Reservar llamada</span>
              </motion.a>
            </div>

            {/* Lead Magnet */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Checklist gratuito para vender más
              </h3>
              <p className="text-gray-600 mb-6">
                Descarga mi checklist de 25 puntos para optimizar tu sitio web y generar más ventas.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
              >
                <SafeIcon icon={FiDownload} className="w-5 h-5" />
                <span>Descargar checklist</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
