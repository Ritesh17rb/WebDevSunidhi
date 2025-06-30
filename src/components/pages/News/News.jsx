import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; // Make sure this file exists

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
console.log('ENV:', process.env);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY||'ce7e221c9cb3437688c81fcee4f893c5'; // ✅ Use your key here
console.log('API_KEY from env:', API_KEY);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'technology',
            language: 'en',
            sortBy: 'publishedAt',
            apiKey: API_KEY,
          },
        });

        if (res.data && res.data.articles) {
          setArticles(res.data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching news:', error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>📰 Latest Tech News</h2>

      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p>Failed to load news. Please try again later.</p>
      ) : articles.length === 0 ? (
        <p>No news articles found.</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img
                src={article.urlToImage || 'https://via.placeholder.com/300x200'}
                alt="news"
                className="news-image"
              />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description || 'No description available.'}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
