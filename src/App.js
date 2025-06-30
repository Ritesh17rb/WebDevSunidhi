import React, { useContext } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import News from './components/pages/News/News';
import DynamicGradient from './components/pages/Gradient/DynamicGradient';

function App() {

  return (
    <div className={`app-container`}>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<DynamicGradient />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/dynamic-bg" element={<DynamicGradient />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
