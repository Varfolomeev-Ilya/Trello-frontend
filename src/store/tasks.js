import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  inputValue: '',
  blurInputValue: '',
  allTasks: [],
  activeFilter: 'all'
};

const changeInputValue = createAction(actionTypes.CHANGE_INPUT_VALUE);
const changeBlurInputValue = createAction(actionTypes.CHANGE_BLUR_INPUT_VALUE);
const setTasks = createAction(actionTypes.SET_TASKS);
const filterTasks = createAction(actionTypes.FILTER_TASKS);

const tasksReduser = createReducer(initialState, {
  [changeInputValue]: (state, action) => {
    state.inputValue = action.payload;
  },
  [changeBlurInputValue]: (state, action) => {
    state.blurInputValue = action.payload;
  },
  [setTasks]: (state, action) => {
    state.allTasks = action.payload;
  },
  [filterTasks]: (state, action) => {
    state.activeFilter = action.payload;
  },
})

export { tasksReduser, changeInputValue, changeBlurInputValue, setTasks, filterTasks };