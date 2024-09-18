import React from 'react';

const ProductImageCarousel = ({ images }) => {
  return (
    <div className="product-image-carousel">
      <img src={images[0]} alt="Main Product" className="main-image" />
      {/* Add carousel logic for other images here */}
    </div>
  );
};

export default ProductImageCarousel;
