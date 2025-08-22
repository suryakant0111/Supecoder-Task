import { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    "SS",
    "FW",
    "PANTS",
    "T-Shirt",
    "SALE",
    "COLLECTION",
    "COMMUNITY",
  ];

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      // Focus the input when showing search
      setTimeout(() => searchInputRef.current?.focus(), 0);
    } else {
      setSearchQuery("");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Here you can implement your search logic
      // For example: navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
    setShowSearch(false);
    setSearchQuery("");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setShowSearch(false);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate(isAuthenticated ? '/profile' : '/login');
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-black text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-yellow-500 text-xl font-extrabold tracking-wider cursor-pointer hover:text-yellow-400 transition-colors duration-300">
              LANDAS
            </h1>
          </div>

          {/* Desktop Menu - Hidden on mobile when search is active */}
          <div className={`hidden lg:flex ${showSearch ? 'lg:hidden' : ''}`}>
            <ul className="flex space-x-8">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-white text-sm font-semibold uppercase tracking-wide cursor-pointer hover:text-yellow-400 transition-colors duration-300 py-2 px-1 border-b-2 border-transparent hover:border-yellow-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Input - Shows when search is active */}
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="bg-gray-800 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64"
                  autoFocus
                />
                <button 
                  type="button"
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </form>
            ) : (
              <button
                aria-label="Search"
                className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                onClick={toggleSearch}
              >
                <FaSearch className="text-lg" />
              </button>
            )}
            
            <button
              aria-label={isAuthenticated ? "User profile" : "Login"}
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
              onClick={handleProfileClick}
            >
              <FaUser className="text-lg" />
            </button>
            <button
              aria-label="Shopping cart"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800 relative"
            >
              <FaShoppingCart className="text-lg" />
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                2
              </span>
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-md border border-gray-600 hover:border-yellow-400 flex items-center space-x-2"
              >
                <FaSignOutAlt className="text-base" />
                <span>Logout</span>
              </button>
            ) : (
              <button 
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-md border border-gray-600 hover:border-yellow-400"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Search */}
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-gray-800 text-white px-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 w-40"
                  autoFocus
                />
                <button 
                  type="button"
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </form>
            ) : (
              <button
                aria-label="Search"
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                onClick={toggleSearch}
              >
                <FaSearch className="text-base" />
              </button>
            )}

            {/* Mobile Icons */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                aria-label="Shopping cart"
                className="text-white hover:text-yellow-400 transition-colors duration-300 relative"
              >
                <FaShoppingCart className="text-base" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  2
                </span>
              </button>
            </div>
            
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 z-40 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          {/* Overlay background */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 -z-10"
            onClick={toggleMobileMenu}
          />
          
          {/* Menu content */}
          <div className="relative z-50 bg-black w-full max-h-[calc(100vh-4rem)] overflow-y-auto shadow-xl">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-gray-800 transition-colors duration-300 text-sm font-semibold uppercase tracking-wide rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="border-t border-gray-700 pt-3 mt-2">
                <div className="flex flex-col space-y-4 px-2 pb-3 pt-2">
                  <button
                    aria-label="User profile"
                    className="text-white hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                    onClick={() => {
                      handleProfileClick();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <FaUser className="text-base" />
                    <span>{isAuthenticated ? 'My Profile' : 'Login'}</span>
                  </button>
                  {isAuthenticated && (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                    >
                      <FaSignOutAlt className="text-base" />
                      <span>Logout</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;