import React, { useState } from 'react';
import styled from 'styled-components';

const AddToCartButton = ({ product, variant }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, { ...product, variant }]);
    alert('Product added to cart!');
  };

  return (
    <CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
  );
};

const CartButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
`;

export default AddToCartButton;