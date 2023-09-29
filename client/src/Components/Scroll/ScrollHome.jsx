const ScrollHome = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="flex space-x-2">
      <button
        class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollTo("news");
        }}
      >
        NEWS
      </button>

      <button
        class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollTo("doctors");
        }}
      >
        DOCTORS
      </button>

      <button
        class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollTo("doctors");
        }}
      >
        SERVICES
      </button>
    </div>
  );
};

export default ScrollHome;
