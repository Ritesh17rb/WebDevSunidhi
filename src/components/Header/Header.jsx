import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className={`header ${darkMode ? 'dark-header' : ''}`}>
      <div className="logo">⚛️ MyApp</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">News</Link>
      </nav>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light' : '🌙 Dark'}
      </button>
    </header>
  );
}

export default Header;
