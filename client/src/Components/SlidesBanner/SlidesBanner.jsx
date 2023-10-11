import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const SlidesBanner = () => {
  const { t } = useTranslation();
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 1"),
    },
    {
      url: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=891&q=80",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 2"),
    },
    {
      url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 3"),
    },

    {
      url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 4"),
    },
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
        <div
          className="absolute inset-0 flex items-center justify-center whitespace-normal overflow-visible m-20"
          style={{
            backdropFilter: "blur(1px)",
          }}>
          <p
            className="text-black text-4xl lg:text-3xl xl:text-4xl text-center font-extrabold"
            style={{
              fontFamily: "Rubik, sans-serif",
              backdropFilter: "blur(100%)",
            }}>
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
