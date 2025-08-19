import { create } from 'zustand';

// Types
export interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  tags?: string[];
  colors?: string[];
  price?: string;
  isLarge?: boolean;
  category?: string;
  brand?: string;
}

interface ProductState {
  products: Product[];
  selectedProductId: number | null;
  setSelectedProductId: (id: number | null) => void;
  getSelectedProduct: () => Product | undefined;
  fetchProducts: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

// Initial mock data
const mockProducts: Product[] = [
  {
    id: 1,
    image: "https://i.pinimg.com/originals/22/7c/d1/227cd1876b30584e249230e54f40d628.jpg",
    title: "Stylish and Practical",
    subtitle: "Comfortable Fit for Everyone",
    tags: ["Casual", "Comfortable", "Everyday"],
    colors: ["#FFD700", "#8B4513", "#000000", "#FFFFFF"],
    price: "99,000원",
    category: "T-Shirt",
    brand: "FashionCo"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/originals/64/1c/73/641c73e162b734ff74382345ea95c464.jpg",
    title: "Elegant Comfort",
    subtitle: "Perfect for Any Occasion",
    tags: ["Elegant", "Versatile", "Stylish"],
    colors: ["#1E90FF", "#FF6347", "#000000", "#FFFFFF"],
    price: "129,000원",
    category: "Shirt",
    brand: "UrbanStyle"
  },
  {
    id: 3,
    image: "https://cdn.shopify.com/s/files/1/2608/0936/files/O1CN01FkSSfP1Lz2xTOm3nG__66431369_017df733-8842-42d9-94a1-a30c82a152cd.jpg?v=1679566839",
    title: "Classic Denim",
    subtitle: "Timeless Style",
    tags: ["Casual", "Denim", "Classic"],
    colors: ["#1E90FF", "#00008B", "#000000"],
    price: "159,000원",
    category: "Jeans",
    brand: "DenimCo"
  },
  {
    id: 4,
    image: "https://tse1.mm.bing.net/th/id/OIP.A9GPNoNq25z7lv-IpaKDfAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Summer Breeze",
    subtitle: "Light and Airy",
    tags: ["Summer", "Lightweight", "Breathable"],
    colors: ["#87CEEB", "#FFA07A", "#FFFFFF"],
    price: "89,000원",
    category: "Dress",
    brand: "SummerStyle"
  },
  {
    id: 5,
    image: "https://media.karousell.com/media/photos/products/2021/11/1/korean_style_highend_white_lon_1635731865_2feb7e0d_progressive.jpg",
    title: "Urban Explorer",
    subtitle: "Adventure Ready",
    tags: ["Outdoor", "Durable", "Comfortable"],
    colors: ["#8B4513", "#228B22", "#000000"],
    price: "179,000원",
    category: "Jacket",
    brand: "AdventureGear"
  }
];

const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  selectedProductId: null,
  loading: false,
  error: null,

  setSelectedProductId: (id) => set({ selectedProductId: id }),

  getSelectedProduct: () => {
    const { products, selectedProductId } = get();
    return products.find(product => product.id === selectedProductId);
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      // In a real app, you would fetch from an API here
      // const response = await fetch('/api/products');
      // const data = await response.json();
      
      // Using mock data for now
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
      set({ products: mockProducts });
    } catch (err) {
      set({ error: 'Failed to fetch products' });
      console.error('Error fetching products:', err);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
