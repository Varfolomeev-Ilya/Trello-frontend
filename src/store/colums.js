import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allColumns: [],
};

const createColumn = createAction(actionTypes.CREATE_COLUMN);

const columnReducer = createReducer(initialState, {
  [createColumn]: (state, action) => {
    state.allColumns = action.payload;
  },
});

export { columnReducer, createColumn };