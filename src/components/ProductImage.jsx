import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <ImageContainer>
      <MainImage src={selectedImage} alt="Product" />
      <ImageGallery>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ImageGallery>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 50px;
  cursor: pointer;`;

export default ProductImage;
