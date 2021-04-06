import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users';
import { boardsReducer } from './boards';
import { tasksReduser } from './tasks';

const store = configureStore({
  reducer: {
    users: usersReducer,
    boards: boardsReducer,
    tasks: tasksReduser,
  },
});

export default store;


