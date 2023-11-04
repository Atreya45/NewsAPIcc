// src/App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [news, setNews] = useState({
    general: [],
    sports: [],
    entertainment: [],
    health: [],
    business: [],
    science: [],
    technology: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  const fetchNews = async (category) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=aeac1b67972d4a4e87dfa342bea5a6f8`
      );
      setNews((prevNews) => ({
        ...prevNews,
        [category]: response.data.articles,
      }));
    } catch (error) {
      setError("Error fetching news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>
        <strong>NewsWave</strong>: <i>Riding the Current of Information</i>
      </h1>
      <Navbar setActiveCategory={setActiveCategory} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <NewsList news={news[activeCategory]} />}
    </div>
  );
};

export default App;
