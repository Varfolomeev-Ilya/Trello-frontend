import { configureStore } from '@reduxjs/toolkit';
import { checkAuthReducer } from './checkAuth';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
  },
});

export default store;


