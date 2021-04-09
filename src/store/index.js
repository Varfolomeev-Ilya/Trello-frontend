import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users';
import { boardsReducer } from './boards';
import { tasksReduser } from './tasks';
import { columnReducer } from './colums'

const store = configureStore({
  reducer: {
    users: usersReducer,
    boards: boardsReducer,
    colums: columnReducer,
    tasks: tasksReduser,
  },
});

export default store;


