import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from './TaskCardStyled';
import { Container, Draggable } from "react-smooth-dnd";
import DeleteTask from '../DeleteTask/DeleteTask';
import RenameTask from '../RenameTask/RenameTask';
import { createColumn } from '../../../../../../../store/colums';
import { taskColumnPosition } from '../../../../../../../api//columnsRequests';
import { movingTasks } from '../../../../../../../api/tasksRequests';

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

  const getTaskPayLoad = (index) => columnTasks[index];

  const onDrop = async (dropResult) => {
    try {
      const { removedIndex, addedIndex, payload } = dropResult;
      if (removedIndex !== null || addedIndex !== null) {
        const draggedTask = payload;
        const newTasks = applyDrag(columnTasks, dropResult);
        const tasksPosition = newTasks.map((item) => {
          return item.id;
        });
        if (draggedTask.columnId !== columnId) {
          const displacedTasks = newTasks.map((item) => {
            if (item.id === draggedTask.id) {
              return { ...item, columnId: columnId };
            }
            return item;
          })

          const newColumns = allColumns.map((item) => {
            if (item.id === columnId) {
              return { ...item, tasksPosition, Tasks: displacedTasks };
            }
            return item;
          })

          const taskId = draggedTask.id;
          dispatch(createColumn(newColumns));
          await movingTasks({ columnId, taskId });

        } else {
          const newColumns = allColumns.map((column) => {
            if (column.id === columnId) {
              return { ...column, Tasks: newTasks, tasksPosition };
            }
            return column;
          });
          dispatch(createColumn(newColumns));
          await taskColumnPosition({ columnId, tasksPosition });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container
        onDrop={onDrop}
        orientation='vertical'
        groupName='groupTasks'
        getChildPayload={(index) => getTaskPayLoad(index)}
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
