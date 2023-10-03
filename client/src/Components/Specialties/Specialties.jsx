import React from "react";

const Specialties = () => {
  return (
    <div className="relative bg-blue-200 p-8 flex flex-col items-center justify-center text-center">
      {/* Fondo de Imagen */}
      <div
        className="bg-cover bg-center w-full h-64 md:h-80"
        style={{
          backgroundImage:
            'url("https://image.slidesdocs.com/responsive-images/background/cute-medical-white-nurse-holiday-festival-powerpoint-background_958557d892__960_540.jpg")',
        }}
      ></div>

      {/* Contenido de Servicios */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-lg mb-4">
          At HealthPlus we offer a wide variety of services to help you take
          care of yourself.
        </p>

        {/* Lista de Especialidades */}
        <ul className="text-gray-700 mb-6">
          <li className="mb-2">Dermatology</li>
          <li className="mb-2">Rheumatology</li>
          <li className="mb-2">Psychiatry</li>
          <li className="mb-2">Gastroenterology</li>
          <li className="mb-2">Endocrinology</li>
          <li className="mb-2">Radiology</li>
          <li className="mb-2">Urology</li>
          <li className="mb-2">Cardiology </li>
          {/* Agrega más especialidades según sea necesario */}
        </ul>

        {/* Mensaje Adicional */}
        <p className="text-xl font-semibold">Because if you care, we care!</p>
      </div>
    </div>
  );
};

export default Specialties;
