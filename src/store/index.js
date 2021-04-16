import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users';
import { boardsReducer } from './boards';
import { columnReducer } from './colums'

const store = configureStore({
  reducer: {
    users: usersReducer,
    boards: boardsReducer,
    columns: columnReducer,
  },
});

export default store;


