// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Navbar from './pages/Navbar'; // Assuming you have this
import Hero from './pages/Hero';
import ProductShowcase from './pages/ProductShowcase';
import ProductSite from './pages/ProductSite';
import Footer from './pages/Footer';

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;