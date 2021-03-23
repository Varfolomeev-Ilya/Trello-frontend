import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  isAuthentificated: false,
  inputValue: '',
  blurInputValue: '',
  tasks: [],
  activeFilter: 'all',
};

const changeIsAuthentification = createAction('CHANGE_IS_AUTH');
const changeInputValue = createAction('CHANGE_IS_TASK');

const checkAuthReducer = createReducer(initialState, {
  [changeIsAuthentification]: (state, action) => {
    state.isAuthentificated = action.payload;
  }
});

const checkTaskReducer = createReducer(initialState, {
  [changeInputValue]: (state, action) => {
    state.inputValue = action.payload
  }
});

export { checkAuthReducer, changeIsAuthentification, changeInputValue, checkTaskReducer };