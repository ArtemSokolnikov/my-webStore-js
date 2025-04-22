import { createSlice } from '@reduxjs/toolkit';
import { defaultSelectedProduct, products } from '../utils/StoreData';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: products,
    selectedProduct: defaultSelectedProduct,
    searchedValue: '',
    sortedValue: '',
    isCreating: false,
  },
  reducers: {
    createProduct(state, action) {
      state.productList.push(action.payload.elem);
    },
    updateProduct(state, action) {
      state.productList = state.productList.map((item) =>
        item.id === action.payload.elem.id
          ? { ...item, ...action.payload.elem }
          : item
      );
    },
    removeProduct(state, action) {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setSearchValue(state, action) {
      state.searchedValue = action.payload.value;
    },
    setSortValue(state, action) {
      state.sortedValue = action.payload.value;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct= action.payload.value;
    },
    setIsCreating(state, action) {
      state.isCreating = action.payload.value;
    },
  },
});

export const {
  createProduct,
  updateProduct,
  removeProduct,
  setSearchValue,
  setSortValue,
  setSelectedProduct,
  setIsCreating
} = productSlice.actions;
export default productSlice.reducer;
