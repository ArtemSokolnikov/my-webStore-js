import { createSelector } from '@reduxjs/toolkit';

export const selectProductPropsCombined = createSelector(
  (state) => state.productProps,
  (productProps) => ({
    selectedStoreProduct: productProps.selectedProduct || {},
    collectionOfProducts: productProps.productList,
    searchedValue: productProps.searchedValue,
    sortedValue: productProps.sortedValue,
    isCreating: productProps.isCreating,
  })
);
