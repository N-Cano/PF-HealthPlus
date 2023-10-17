import axios from "axios";

export const fetchNewsData = async (setCurrentPage, setNews) => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=dc9527c75c4c4affbb788da794c77690"
        );
        setNews(response.data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};