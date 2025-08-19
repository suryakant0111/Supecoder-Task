"use client";

import useProductStore from "../store/productStore";
import type { Product } from "../store/productStore";
import { useEffect } from "react";

const ProductSite = () => {
  const { 
    products, 
    selectedProductId,
    setSelectedProductId,
    fetchProducts,
    loading,
    error 
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div className="p-4 text-center">Loading products...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  if (products.length === 0) return <div className="p-4 text-center">No products found</div>;

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
            <div 
              key={product.id} 
              className={`group cursor-pointer ${
                selectedProductId === product.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
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
                {(product.colors?.length ? product.colors : ['#000000', '#CCCCCC', '#C0A080']).map((color, idx) => (
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
  <div className="w-full h-auto sm:h-64 bg-black text-white flex flex-col justify-center items-start p-6 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">B2B 전문 의류 쇼핑몰!</h1>
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">15년 이상의 노하우로 믿고 거래 하세요</h1>
    <p className="text-base sm:text-lg font-normal text-gray-200">수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요</p>
  </div>
</div>
    </div>
  );
};

export default ProductSite;