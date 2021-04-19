import React from 'react';
import { StyledCard, StyledTitle, StyledDiv } from './ColumnStyled';
import ColumnPopper from '../RenamePopper/ColumnPopper';
import DeleteColumn from '../DeleteColumn/DeleteColumn';
import CreateTask from '../Tasks/CreateTask/CreateTask';
import TaskCard from '../Tasks/TaskCard/TaskCard';
import { createColumn } from '../../../../../../store/colums';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Draggable } from 'react-smooth-dnd';
import { columnsBoardPosition } from '../../../../../../api/boardsRequests';
import { createBoard } from '../../../../../../store/boards';

function ColumnCard({ id, name, boardId }) {
  const dispatch = useDispatch();
  const allColumns = useSelector((state) => state.columns.allColumns);
  const allBoards = useSelector((state) => state.boards.allBoards);
  const boardColumns = allColumns.map((item) => {
    if (item.boardId === boardId) {
      return item;
    }
  });
  const currentBoard = allBoards.find((item) => item.boardId === boardId);
  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;

    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 1, itemToAdd);
    }

    return result;
  };

  const onDrop = (dropResult) => {
    const { removedIndex, addedIndex } = dropResult;
    if (removedIndex !== null || addedIndex !== null) {
      const newColumns = applyDrag(boardColumns, dropResult);
      const columnPosition = newColumns.map((item) => {
        return item.id
      })
      console.log(columnPosition);
      // console.log(columnPosition)
      const newBoard = { ...currentBoard, columnPosition };
      // dispatch(createBoard(newBoard))
      // const response = columnsBoardPosition({ boardId, columnsPosition });
    }
  }
  return (
    <Container
      onDrop={onDrop}
      groupName='groupColumns'
      orientation='horizontal'
    >
      <Draggable key={id}>
        <StyledCard>
          <StyledTitle>
            <ColumnPopper
              name={name}
              columnId={id}
            />
            <DeleteColumn
              name={name}
              columnId={id}
            />
          </StyledTitle>
          <TaskCard
            columnId={id}
          />
          <StyledDiv>
            <CreateTask
              columnId={id}
            >
            </CreateTask>
          </StyledDiv>
        </StyledCard>
      </Draggable>
    </Container>
  )
}

export default ColumnCard;
