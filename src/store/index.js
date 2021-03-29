import { configureStore } from '@reduxjs/toolkit';
import { checkAuthReducer } from './auth';
import { usersReducer } from './users';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    users: usersReducer,
  },
});

export default store;


