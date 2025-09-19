import React from 'react';

const Privacy = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En Ivan SEO valoramos tu privacidad. Esta política describe qué información recopilamos,
        cómo la usamos y las opciones que tienes con respecto a tu información personal.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Información que recopilamos</h2>
      <p className="mb-4">
        Podemos recopilar información que nos facilitas directamente (por ejemplo, cuando contactas
        vía formulario o email) y datos técnicos automatizados (por ejemplo, datos de navegación).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cómo utilizamos la información</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Responder a consultas y solicitudes.</li>
        <li>Mejorar y personalizar nuestros servicios.</li>
        <li>Enviar comunicaciones relacionadas con servicios, si nos autorizas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Compartir y seguridad</h2>
      <p className="mb-4">
        No vendemos tus datos. Podemos compartir información con proveedores que nos ayudan a operar
        el servicio (hosting, analytics), siempre con medidas razonables de seguridad.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Tus derechos</h2>
      <p className="mb-4">
        Dependiendo de tu ubicación, puedes tener derechos para acceder, rectificar o solicitar la eliminación
        de tus datos. Para ejercerlos, contáctanos en <a href="mailto:ivanseo97@gmail.com" className="text-primary-600">ivanseo97@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies y tecnologías similares</h2>
      <p className="mb-4">
        Utilizamos cookies técnicas necesarias para el funcionamiento y, si procede, cookies analíticas.
        Puedes gestionar las preferencias de cookies en tu navegador.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Cambios en esta política</h2>
      <p className="mb-4">
        Podemos actualizar esta política ocasionalmente. La versión más reciente se publicará en esta página.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Última actualización: 2025-09-19
      </p>
    </section>
  );
};

export default Privacy;
