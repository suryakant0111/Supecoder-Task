import { create } from 'zustand';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface HeroState {
  currentSlide: number;
  progress: number;
  heroSlides: HeroSlide[];
  setCurrentSlide: (index: number) => void;
  setProgress: (value: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

const SLIDE_DURATION = 5000; // 5 seconds per slide

const heroSlides = [
  {
    id: 1,
    image: "url('/Hero.jpg')",
    title: "Performance-Ready",
    subtitle: "Apparel for Work & Beyond"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Urban Style",
    subtitle: "Designed for the Modern Man"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    title: "Premium Quality",
    subtitle: "Crafted for Excellence"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Street Fashion",
    subtitle: "Express Your Individuality"
  }
];

export const useHeroStore = create<HeroState>((set) => ({
  currentSlide: 0,
  progress: 0,
  heroSlides,
  
  setCurrentSlide: (index) => set({ currentSlide: index }),
  setProgress: (value) => set({ progress: value }),
  
  nextSlide: () => set((state) => ({
    currentSlide: (state.currentSlide + 1) % state.heroSlides.length,
    progress: 0
  })),
  
  prevSlide: () => set((state) => ({
    currentSlide: (state.currentSlide - 1 + state.heroSlides.length) % state.heroSlides.length,
    progress: 0
  })),
  
  goToSlide: (index) => set({
    currentSlide: index,
    progress: 0
  })
}));

// Auto-advance slides
export const startAutoSlide = () => {
  const interval = setInterval(() => {
    useHeroStore.getState().nextSlide();
  }, SLIDE_DURATION);
  return () => clearInterval(interval);
};

// Auto-update progress
export const startProgressUpdate = () => {
  const interval = setInterval(() => {
    const { progress, nextSlide } = useHeroStore.getState();
    if (progress >= 100) {
      nextSlide();
    } else {
      useHeroStore.setState({ 
        progress: progress + (100 / (SLIDE_DURATION / 50)) 
      });
    }
  }, 50);
  return () => clearInterval(interval);
};
