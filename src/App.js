import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import News from './components/pages/News/News';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
