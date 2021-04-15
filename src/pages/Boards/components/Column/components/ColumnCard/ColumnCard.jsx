import React from 'react';
import { StyledCard, StyledTitle, StyledDiv } from './ColumnStyled';
import ColumnPopper from '../RenamePopper/ColumnPopper';
import DeleteColumn from '../DeleteColumn/DeleteColumn';
import CreateTask from '../Tasks/CreateTask/CreateTask';
import TaskCard from '../Tasks/TaskCard/TaskCard';
import { createColumn } from '../../../../../../store/colums';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Draggable } from 'react-smooth-dnd';
// import { updateColumns } from '../../../../../../api/columnsRequests';

function ColumnCard({ id, name }) {
  const dispatch = useDispatch();
  const allColumns = useSelector((state) => state.columns.allColumns);
  const currentColumn = allColumns.find((item) => item.id === id);
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
    const { removedIndex, addedIndex } = dropResult;

    if (removedIndex !== null || addedIndex !== null) {
      const newTasks = applyDrag(columnTasks, dropResult);
      const newColumns = allColumns.map((item) => {
        if (item.id === id) {
          return { ...item, Tasks: newTasks };
        }
        return item;
      });
      dispatch(createColumn(newColumns));
    }
  }
  return (
    <Container
      onDrop={onDrop}
      orientation='horizontal'
      groupName='groupColumns'
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
