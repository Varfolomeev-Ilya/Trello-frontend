import { configureStore } from '@reduxjs/toolkit';
import { checkAuthReducer, checkTaskReducer } from './store.js';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    checkTask: checkTaskReducer,
  },
});

export default store;


