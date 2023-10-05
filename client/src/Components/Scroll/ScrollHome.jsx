const ScrollHome = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("news");
        }}>
        NEWS
      </button>

      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("doctors");
        }}>
        DOCTORS
      </button>

      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("services");
        }}>
        SERVICES
      </button>

      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("subscribe");
        }}>
        SUBSCRIBE
      </button>
    </div>
  );
};

export default ScrollHome;
