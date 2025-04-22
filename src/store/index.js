import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productListSlice.js';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn('Could not load state from localStorage:', e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (e) {
    console.warn('Could not save state to localStorage:', e);
  }
};

const store = configureStore({
  reducer: {
    productProps: productReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState()
  saveState({
    productProps: state.productProps, // сохраняем только нужную часть
  });
});

export default store;
