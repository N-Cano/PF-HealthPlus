const Specialties = () => {
  return (
    <div
      className=" relative mt-0 bg-blue-200 p-8 flex flex-col items-center justify-center text-center h-[500px]"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backdropFilter: "blur(1px)",
        backgroundSize: "cover",
      }}>
      {/* Contenido de Servicios */}
      <div className="absolute mt-0 inset-0 flex flex-col items-center justify-center text-black">
        <h3 className="text-3xl  text-white font-semibold mb-4">
          Our Services
        </h3>
        <p className="text-lg text-white mb-4">
          At HealthPlus we offer a wide variety of services to help you take
          care of yourself.
        </p>

        {/* Lista de Especialidades */}
        <ul className="text-white mb-6">
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
        <p className="text-xl text-white font-semibold">
          Because if you care, we care!
        </p>
      </div>
    </div>
  );
};

export default Specialties;
