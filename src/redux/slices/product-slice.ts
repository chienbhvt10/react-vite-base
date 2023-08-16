import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  productDetail: any;
  productList: any;
}

const initialState: ProductState = {
  productDetail: {},
  productList: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetail: () => {},
    getProductList: () => {},
  },
});

export const { getProductList } = productSlice.actions;

export default productSlice.reducer;
