import React from 'react';
import styled from 'styled-components';

const ProductReviews = ({ reviews }) => {
  return (
    <ReviewSection>
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <Review key={index}>
          <strong>{review.user}</strong>
          <p>{review.comment}</p>
          <Rating>Rating: {review.rating}/5</Rating>
        </Review>
      ))}
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  margin-top: 20px;
`;

const Review = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const Rating = styled.p`
  font-weight: bold;
`;

export default ProductReviews;