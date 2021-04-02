import { createAction, createReducer } from '@reduxjs/toolkit';
import * as actionTypes from './constants/actionTypes';

const initialState = {
  allBoards: [
    {
      id: 1,
      name: 'Board1',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Board2',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Board3',
      columns: [
        {
          id: 1,
          name: 'Column1',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 2,
          name: 'Column2',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
        {
          id: 3,
          name: 'Column3',
          items: [
            {
              id: 1,
              text: 'Text1',
            },
            {
              id: 2,
              text: 'Text2',
            },
            {
              id: 3,
              text: 'Text3',
            },
          ],
        },
      ],
    },
  ],
  inputValue: '',
};

const createBoard = createAction(actionTypes.CREATE_BOARD);
const boardInputValue = createAction(actionTypes.BOARD_INPUT_VALUE);

const boardsReducer = createReducer(initialState, {
  [createBoard]: (state, action) => {
    state.allBoards = action.payload;
  },
  [boardInputValue]: (state, action) => {
    state.inputValue = action.payload;
  },
});

export { boardsReducer, createBoard, boardInputValue };