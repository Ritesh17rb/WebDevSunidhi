  import React from 'react';
  import './Header.css';
  import { Link } from 'react-router-dom';

  function Header() {
    return (
      <header className="header">
        <div className="logo">⚛️ MyApp</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Counter</Link>
          <Link to="/services">Services</Link> 
          <Link to="/contact">Contact</Link> 
          <Link to="/news">News</Link>
          <Link to="/dynamic-bg">See Magic⭐</Link>
        </nav>
      </header>
    );
  }

  export default Header;
