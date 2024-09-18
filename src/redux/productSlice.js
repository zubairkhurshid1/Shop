import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  images: [],
  variants: [],
  reviews: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProduct, setLoading } = productSlice.actions;
export default productSlice.reducer;
