import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginado from "../Paginado/paginado";

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGame = news.slice(startIndex, endIndex);

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
    <div>
      <h3 className="mt-5 text-center text-2xl">NEWS</h3>
      <div className="flex flex-wrap justify-center">
        {currentGame.map((article, index) => (
          <div key={index} className="max-w-sm m-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{article.title}</h2>
                <p className="text-gray-700 text-base">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-500"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default News;