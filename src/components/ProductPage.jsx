import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, setLoading } from '../redux/productSlice';

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setLoading(true));
    // Simulate fetching product data
    setTimeout(() => {
      dispatch(setProduct({
        name: 'Sample Product',
        images: ['/img1.jpg', '/img2.jpg'],
        variants: ['Small', 'Medium', 'Large'],
        reviews: ['Great product!', 'Could be better.']
      }));
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);

  if (product.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Render product details */}
    </div>
  );
};

export default ProductPage;
