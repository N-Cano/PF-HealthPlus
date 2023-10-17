import { useState } from "react";
//Iconos
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
//Traducción
import { useTranslation } from "react-i18next";
// Darkmode
import { useTheme } from "../../contextAPI/ThemeContext";

const SlidesBanner = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const slides = [
    {
      url: "https://res.cloudinary.com/drpge2a0c/image/upload/v1697553469/assets/banner/banner_f7fs36.avif",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 1"),
    },
    {
      url: "https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/banner/banner2_wufgap.avif",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 2"),
    },
    {
      url: "https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/banner/banner3_umu90b.avif",
      msg: t("LANDING PAGE.SLIDESBANNER.MSG 3"),
    },

    {
      url: "https://res.cloudinary.com/drpge2a0c/image/upload/v1697553469/assets/banner/banner4_ghjaex.avif",
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
            className="text-black text-6xl lg:text-3xl xl:text-4xl text-center font-extrabold"
            style={{
              fontFamily: "Rubik, sans-serif",
              color: darkMode ? "#00519C" : "black",
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
