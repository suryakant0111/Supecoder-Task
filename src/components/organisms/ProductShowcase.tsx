"use client"
import { useEffect, useState } from "react"
import { create } from "zustand"

// Types
type Product = {
  id: number
  image: string
  title: string
  subtitle: string
  tags: string[]
  isLarge?: boolean
}

type ProductStore = {
  selectedProduct: number | null
  setSelectedProduct: (id: number | null) => void
}

// Store
const useProductStore = create<ProductStore>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (id) => set({ selectedProduct: id }),
}))

const ProductShowcase = () => {
  const { selectedProduct, setSelectedProduct } = useProductStore()

  const products: Product[] = [
    { id: 1, image: "https://i.pinimg.com/originals/22/7c/d1/227cd1876b30584e249230e54f40d628.jpg", title: "Stylish and Practical", subtitle: "Comfortable Fit for Everyone", tags: ["Casual", "Comfortable", "Everyday"] },
    { id: 2, image: "https://i.pinimg.com/originals/64/1c/73/641c73e162b734ff74382345ea95c464.jpg", title: "Lightweight and Warm", subtitle: "Protection from the Cold", tags: ["Warm", "Lightweight", "Protection"] },
    { id: 3, image: "https://cdn.shopify.com/s/files/1/2608/0936/files/O1CN01FkSSfP1Lz2xTOm3nG__66431369_017df733-8842-42d9-94a1-a30c82a152cd.jpg?v=1679566839", title: "Active Lifestyle", subtitle: "Perfect for Outdoor Activities", tags: ["Active", "Outdoor", "Durable"] },
    { id: 4, image: "https://tse1.mm.bing.net/th/id/OIP.A9GPNoNq25z7lv-IpaKDfAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", title: "Premium Collection", subtitle: "Elegance Redefined", tags: ["Premium", "Elegant", "Luxury"], isLarge: true },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length)
    }, 2000) // change image every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-12 bg-gray-50">
      {/* Desktop view */}
      <div className="hidden md:flex flex-col gap-5 items-center">
        <div className="flex gap-5 justify-center max-w-7xl mx-auto items-end relative">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={products[(currentIndex + index) % products.length]}
              isSelected={selectedProduct === product.id}
              onClick={() => setSelectedProduct(product.id)}
              customSize={product.isLarge ? "w-[568px] h-[604px]" : "w-[284px] h-[460px]"}
            />
          ))}
        </div>
        {/* Progress Bar for Desktop */}
        <div className="w-64 h-1 bg-gray-600 bg-opacity-50 rounded-full overflow-hidden mt-6">
          <div 
            className="h-full bg-yellow-500 transition-all duration-500" 
            style={{ width: `${((currentIndex % products.length) / (products.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile view - single card rotation */}
      <div className="md:hidden flex justify-center">
        <div className="w-[300px] relative">
          <ProductCard
            key={products[currentIndex].id}
            product={products[currentIndex]}
            isSelected={selectedProduct === products[currentIndex].id}
            onClick={() => setSelectedProduct(products[currentIndex].id)}
            customSize="w-full h-[460px]"
          />
          {/* Progress Bar */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-600 bg-opacity-50 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  isSelected: boolean
  onClick: () => void
  customSize?: string
}

const ProductCard = ({ product, isSelected, onClick, customSize }: ProductCardProps) => (
  <div className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer group ${isSelected ? "ring-2 ring-blue-500" : ""} ${customSize ? customSize : "w-[274px] h-[289.5px]"}`} onClick={onClick}>
    <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-transparent to-white/15"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/15"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
      <h3 className="text-white font-semibold text-lg">{product.title}</h3>
      <p className="text-gray-200 text-sm">{product.subtitle}</p>
    </div>
  </div>
)

export default ProductShowcase
