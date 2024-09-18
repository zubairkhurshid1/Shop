import React from 'react';
import styled from 'styled-components';

const ProductVariants = ({ variants, selectedVariant, onVariantChange }) => {
  return (
    <VariantSelector>
      {variants.map((variant, index) => (
        <VariantButton 
          key={index}
          isSelected={selectedVariant.color === variant.color && selectedVariant.size === variant.size}
          onClick={() => onVariantChange(variant)}
        >
          {variant.color} / {variant.size}
        </VariantButton>
      ))}
    </VariantSelector>
  );
};

const VariantSelector = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const VariantButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#333' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#333')};
  border: 1px solid #333;
  padding: 10px;
  cursor: pointer;
`;

export default ProductVariants;