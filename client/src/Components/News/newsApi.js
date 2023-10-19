import axios from "axios";

export const fetchNewsData = async (setCurrentPage, setNews) => {
  try {
    const response = await axios.get(
      "https://newsdata.io/api/1/news?apikey=pub_31295aca47de29ff44eea90e57f27bcfec9a4&q=clinic%20health&category=health"
    );
    setNews(response.data.results);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
