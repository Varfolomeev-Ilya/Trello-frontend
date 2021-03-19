import { configureStore } from '@reduxjs/toolkit';
import { checkAuthReducer } from './store.js';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
  },
});

export default store;


