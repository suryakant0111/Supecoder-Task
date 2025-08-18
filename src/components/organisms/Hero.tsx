import { useEffect } from 'react';
import { useHeroStore, startAutoSlide, startProgressUpdate } from '../../../shared/store/useHeroStore';
// Add Zen Dots font import
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Zen+Dots:wght@400&display=swap';
fontLink.rel = 'stylesheet';
if (!document.head.querySelector('link[href*="Zen+Dots"]')) {
  document.head.appendChild(fontLink);
}

const Hero = () => {
  const {
    currentSlide,
    progress,
    heroSlides,
    nextSlide,
    prevSlide,
    goToSlide
  } = useHeroStore();

  // Set up auto-sliding and progress updates
  useEffect(() => {
    const cleanupAutoSlide = startAutoSlide();
    const cleanupProgressUpdate = startProgressUpdate();
    
    return () => {
      cleanupAutoSlide();
      cleanupProgressUpdate();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-end h-full px-10">
        <div className="text-white max-w-lg text-left">
          <h1 
            className="text-4xl md:text-2xl font-bold leading-snug mb-2"
            style={{
              fontFamily: 'Zen Dots, cursive',
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: '-3%'
            }}
          >
            {heroSlides[currentSlide].title} <br />
            {heroSlides[currentSlide].subtitle}
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Discover premium quality clothing designed for modern professionals
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-64 h-1 bg-gray-600 bg-opacity-50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-500 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-80'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-yellow-500 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-yellow-500 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;