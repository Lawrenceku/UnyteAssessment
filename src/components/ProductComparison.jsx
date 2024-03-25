import React from "react";

const ProductComparison = ({ product }) => {
  const maxStars = 5; // Maximum number of stars
  const ratedStars = Math.min(product.rating, maxStars); // Determine the number of rated stars

  return (
    <div className="my-8 relative flex w-96 flex-col min-h-96 bg-white bg-clip-border text-gray-700 border-x-2 ">
      <div className="relative mx-4 mt-4 w-40 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={product.image}  className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" alt={product.name} />
      </div>
      <div className="p-6">
        <div className="mb-2 flex-col items-center justify-between items">
          <p className="border-t-2 py-4 px-2 block font-sans text-md font-md leading-normal text-gray-700 antialiased opacity-75">
            <span className="font-bold">Name: </span>{product.name}
          </p>
          <p className="border-t-2 py-4 px-2 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <span className="font-bold">Description: </span> {product.description}
          </p>
          <p className="border-t-2 py-4 px-2 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <span className="font-bold">Price: </span> {product.price}
          </p>
          <p className="border-y-2 py-4 px-2 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <span className="font-bold">Category: </span> {product.category.join(', ')}
          </p>
          <div className="flex items-center py-4 px-2 block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <span className="font-bold mr-1">Rating: </span>
            {[...Array(maxStars)].map((_, index) => (
              <span key={index} className={`fa fa-star ${index < ratedStars ? 'text-[#FFA500]' : ''}`}></span>
            ))}
            <span className='ml-1 font-medium'>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
