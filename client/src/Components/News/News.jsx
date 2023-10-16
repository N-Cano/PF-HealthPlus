import { useState, useEffect } from "react";
import axios from "axios";
import Paginado from "../Paginado/paginado";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=dc9527c75c4c4affbb788da794c77690"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-blue-900 w-full pb-2">
      {console.log(currentGame)}
      <h3
        className="mt-5 text-center text-2xl text-white font-bold"
        style={{ fontFamily: "Rubik, sans-serif" }}>
        {t("HOME PAGE.NEWS.TITLE")}
      </h3>
      <div className="flex flex-wrap justify-center">
        {currentGame.map((article, index) => (
          <div key={index} className="max-w-sm m-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-md h-[500px]">
              <img
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://fakeimg.pl/553x253/85c5f2/000000?text=No+image"
                }
                alt={article.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{article.title}</h2>
                <p className="text-gray-700 text-base">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-500">
                  {t("HOME PAGE.NEWS.BUTTON")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
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
