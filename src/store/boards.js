import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allBoards: [],  
};

const createBoard = createAction(actionTypes.CREATE_BOARD);

const boardsReducer = createReducer(initialState, {
  [createBoard]: (state, action) => {
    state.allBoards = action.payload;
  },
});

export { boardsReducer, createBoard };