import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from './TaskCardStyled';
import { Container, Draggable } from "react-smooth-dnd";
import DeleteTask from '../DeleteTask/DeleteTask';
import RenameTask from '../RenameTask/RenameTask';
import { createColumn } from '../../../../../../../store/colums';
import { taskColumnPosition } from '../../../../../../../api//columnsRequests';

function TaskCard({ columnId }) {
  const dispatch = useDispatch();
  const allColumns = useSelector((state) => state.columns.allColumns);
  const currentColumn = allColumns.find((item) => item.id === columnId);
  const columnTasks = currentColumn.Tasks;

  const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;

    if (removedIndex === null && addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
    return result;
  };

  const onDrop = (dropResult) => {
   try {
    const { removedIndex, addedIndex } = dropResult;
    if (removedIndex !== null || addedIndex !== null) {
      const newTasks = applyDrag(columnTasks, dropResult);
      const tasksPosition = newTasks.map((item) => {
        return item.id;
      });
      const newColumns = allColumns.map((column) => {
        if (column.id === columnId) {
          return { ...column, Tasks: newTasks, tasksPosition };
        }
        return column;
      });
     
      console.log(tasksPosition)
      const response = taskColumnPosition({ columnId, tasksPosition });
      dispatch(createColumn(newColumns));
    
   }} catch(error) {
     console.log(error);
   }
  };

  return (
    <>
      <Container
        onDrop={onDrop}
        orientation='vertical'
        groupName='groupTasks'
      >
        {columnTasks.map((task) =>
          <Draggable key={task.id}>
            <StyledContainer
              id={columnId}
              text={task.text}
              key={task.id}
              taskId={task.id}
            >
              <RenameTask
                taskText={task.text}
                columnId={columnId}
                taskId={task.id}
              />
              <DeleteTask
                columnDelId={columnId}
                taskDelId={task.id}
              />
            </StyledContainer>
          </Draggable>
        )}
      </Container>
    </>
  )
};

export default TaskCard;
