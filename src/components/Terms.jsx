import React from 'react';

const Terms = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Términos de Servicio</h1>

      <p className="mb-4">
        Estos Términos de Servicio describen las condiciones bajo las cuales se ofrecen los servicios y el uso del sitio web.
        Por favor, léelos detenidamente antes de utilizar nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Servicios</h2>
      <p className="mb-4">
        Ivan SEO proporciona servicios de consultoría y optimización SEO. Cualquier alcance, entregables y condiciones económicas
        se definirán en acuerdos o propuestas separadas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Responsabilidades</h2>
      <p className="mb-4">
        Nos comprometemos a prestar los servicios con la máxima profesionalidad. Sin embargo, no garantizamos posiciones específicas
        en motores de búsqueda ya que dependen de múltiples factores externos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Propiedad intelectual</h2>
      <p className="mb-4">
        Todo el contenido del sitio web y los entregables generados se regirán por derechos de autor y las condiciones acordadas.
        El cliente recibirá las licencias y permisos necesarios para el uso acordado de los entregables.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Limitación de responsabilidad</h2>
      <p className="mb-4">
        En la medida permitida por la ley, Ivan SEO no será responsable por daños indirectos, lucro cesante o pérdida de datos
        derivados del uso del sitio o de los servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Contacto</h2>
      <p className="mb-4">
        Para consultas relacionadas con estos términos, contáctanos en <a href="mailto:ivanseo97@gmail.com" className="text-primary-600">ivanseo97@gmail.com</a>.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Última actualización: 2025-09-19
      </p>
    </section>
  );
};

export default Terms;
