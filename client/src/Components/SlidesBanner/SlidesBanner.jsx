import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const SlidesBanner = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
      msg: "We offer a wide variety of services to comply with your need! Because if you care, we care.",
    },
    {
      url: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=891&q=80",
      msg: "Here you can find the best services! Because if you care, we care.",
    },
    {
      url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      msg: "We have the best tools",
    },

    {
      url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      msg: "We have the best attention",
    },
    {
      url: "https://static.nationalgeographicla.com/files/styles/image_3200/public/chimpanzee_01.webp?w=1600&h=1065",
      msg: "JORGE"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1800px] h-[580px] w-full m-auto py-7 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: "center",
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center whitespace-normal overflow-visible m-20">
          <p className="text-black text-3xl lg:text-4xl xl:text-5xl text-center">
            {slides[currentIndex].msg}
          </p>
        </div>
      </div>

      {/* FLECHA HACIA LA IZQUIERDA */}
      <div className="hidden group-hover:block  hover:bg-white absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft
          className="hover:text-black"
          onClick={prevSlide}
          size={30}
        />
      </div>

      {/* FLECHA HACIA LA DERECHA */}
      <div className="hidden group-hover:block hover:bg-white absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight
          className="hover:text-black"
          onClick={nextSlide}
          size={30}
        />
      </div>

      {/* MAPEAMOS LAS SLIDES PARA RENDERIZAR CADA PUNTO*/}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer hover:bg-blue-200 rounded-full"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidesBanner;
