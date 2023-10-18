import { useState, useEffect } from "react";
import Paginado from "../Paginado/paginado";
import { useTranslation } from "react-i18next";
import { fetchNewsData } from "./newsApi";

import { useTheme } from "../../contextAPI/ThemeContext";


const News = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGame = news
    .filter((article) => article.description !== "[Removed]")
    .slice(startIndex, endIndex);

  useEffect(() => {
    fetchNewsData(setCurrentPage, setNews);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-blue-900 w-full pb-2">
      <h3
        className="mt-5 text-center text-2xl text-white font-bold"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        {t("HOME PAGE.NEWS.TITLE")}
      </h3>
      <div className="flex flex-wrap justify-center">
        {currentGame.map((article, index) => (
          <div key={index} className="max-w-sm m-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-md h-[470px]">
              <img
                src={
                  article.image_url
                    ? article.image_url
                    : "https://fakeimg.pl/553x253/85c5f2/000000?text=No+image"
                }
                alt={article.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-1">
                <h2
                  className="font-bold text-xl -mt-1"
                  style={{ color: darkMode ? "black" : "" }}
                >
                  {article.title}
                </h2>
                <p className="text-gray-700 text-base">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-500"
                >
                  {t("HOME PAGE.NEWS.BUTTON")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 pb-4">
        <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default News;
