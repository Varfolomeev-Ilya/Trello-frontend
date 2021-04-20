import React from 'react';
import { StyledCard, StyledTitle, StyledDiv } from './ColumnStyled';
import ColumnPopper from '../RenamePopper/ColumnPopper';
import DeleteColumn from '../DeleteColumn/DeleteColumn';
import CreateTask from '../Tasks/CreateTask/CreateTask';
import TaskCard from '../Tasks/TaskCard/TaskCard';

function ColumnCard({ id, name }) {
   return (
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
  )
}

export default ColumnCard;
