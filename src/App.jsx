import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import HomePage from './components/HomePage'; // Ensure HomePage.jsx exists or remove this line if not needed.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* If HomePage exists */}
        <Route path="/product" element={<ProductPage />} /> {/* Product page route */}
      </Routes>
    </Router>
  );
};

export default App;
