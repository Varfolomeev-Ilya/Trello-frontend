import { configureStore } from '@reduxjs/toolkit';
import { checkAuthReducer } from './auth';
import { usersReducer } from './users';
import { boardsReducer } from './boards';
import { tasksReduser } from './tasks';

const store = configureStore({
  reducer: {
    checkAuth: checkAuthReducer,
    users: usersReducer,
    boards: boardsReducer,
    tasks: tasksReduser,
  },
});

export default store;


