// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import  Login  from './components/organisms/Login';
import Navbar from './components/organisms/Navbar'; // Assuming you have this
import Hero from './components/organisms/Hero';
import ProductShowcase from './components/organisms/ProductShowcase';
import ProductSite from './components/organisms/ProductSite';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            <div className="bg-gray-100 min-h-screen">
              <Navbar />
              <Hero />
              <ProductShowcase />
              <ProductSite />
              <Footer />
            </div>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;