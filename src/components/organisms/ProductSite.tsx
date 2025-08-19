"use client";

interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  colors: string[];
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: "https://i.pinimg.com/originals/22/7c/d1/227cd1876b30584e249230e54f40d628.jpg",
    title: "상품명이 노출 됩니다.상품명이 노출 됩니다...",
    subtitle: "(브랜드명) · 카테고리 · 색상명",
    colors: ["#FFD700", "#8B4513", "#000000", "#FFFFFF", "#FFD700", "#FF6347", "#32CD32", "#9370DB"],
    price: "000,000원"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/originals/64/1c/73/641c73e162b734ff74382345ea95c464.jpg",
    title: "상품명이 노출 됩니다.상품명이 노출 됩니다...",
    subtitle: "(브랜드명) · 카테고리 · 색상명",
    colors: ["#1E90FF", "#FF6347", "#000000", "#FFFFFF", "#FFD700", "#FF6347", "#32CD32", "#9370DB"],
    price: "000,000원"
  },
  {
    id: 3,
    image: "https://cdn.shopify.com/s/files/1/2608/0936/files/O1CN01FkSSfP1Lz2xTOm3nG__66431369_017df733-8842-42d9-94a1-a30c82a152cd.jpg?v=1679566839",
    title: "상품명이 노출 됩니다.상품명이 노출 됩니다...",
    subtitle: "(브랜드명) · 카테고리 · 색상명",
    colors: ["#000000", "#808080", "#C0C0C0", "#FFA500", "#FFD700", "#FF6347", "#32CD32", "#9370DB"],
    price: "000,000원"
  },
  {
    id: 4,
    image: "https://tse1.mm.bing.net/th/id/OIP.A9GPNoNq25z7lv-IpaKDfAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "상품명이 노출 됩니다.상품명이 노출 됩니다...",
    subtitle: "(브랜드명) · 카테고리 · 색상명",
    colors: ["#800000", "#000080", "#008000", "#4B0082", "#FFD700", "#FF6347", "#32CD32", "#9370DB"],
    price: "000,000원"
  }
];

const ProductSite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div className="text-center py-8 border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-800 mb-2">
          상품진열이 타이틀이 들어갑니다.
        </h1>
        <p className="text-sm text-gray-600">
          부타이틀이 필요할 경우 텍스트가 들어갑니다.
        </p>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product image */}
              <div className="aspect-square mb-4 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Color swatches */}
              <div className="flex gap-1 mb-3">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-3 h-3 rounded-full border border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Product info */}
              <div className="space-y-1">
                <h3 className="text-sm text-gray-800 leading-tight line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {product.subtitle}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-orange-500 font-medium">할인율 6%</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Black div */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="w-full h-64 bg-black  text-white font-bold">
 <h1>B2B 전문 의류 쇼핑몰! </h1>
 <h1>15년 이상의 노하우로 믿고 거래 하세요 </h1>
 <p>수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSite;