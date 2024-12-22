import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Product = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(star);
    const hasHalfStar = star - fullStars > 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="text-yellow-500" />)}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="text-yellow-500" />)}
      </>
    );
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
      <div className="relative group">
        <img className="w-full h-56 object-cover transition duration-300 transform group-hover:scale-110" src={img} alt={title} />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg shadow-md">Sale</div>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300">
          {title}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-70 transition duration-300"></div>
      </div>
      <div className="p-6 bg-gradient-to-br from-white via-white to-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-2 mb-2">
          {renderStars()}
          <span className="ml-2 text-gray-600">{reviews}</span>
        </div>
        <div className="flex items-center justify-between">
          {prevPrice && <span className="text-gray-400 line-through">{prevPrice}</span>}
          <span className="text-xl font-bold text-gray-900">${newPrice}</span>
        </div>
        <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-500 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;