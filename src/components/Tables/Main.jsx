import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';

function Main(props) {
  const activeFilter = props.tasks;

  const createFilteredArr = (...props) => {
    if (activeFilter === 'all') {
      return props.tasks;
    }

    if (activeFilter === 'completed') {
      return props.tasks.filter(item => item.isDone);
    }

    if (activeFilter === 'left') {
      return props.tasks.filter(item => !item.isDone);
    }
  };

  const tasks = createFilteredArr();

  return (
    <main>
      {/* {tasks.map(task => (
        tass.isInput
          ? (<input
            key={task.id}
            onBlur={() => props.onInputBlur(task.id)}
            value={props.blurInputValue}
            onChange={props.onBlurInputChange}
            autoFocus
            maxLength="10"
          />)
          : (<Task
            onTaskDblClick={props.onTaskDblClick}
            onDoneBtnClick={props.onDoneBtnClick}
            onDeleteBtnClick={props.onDeleteBtnClick}
            task={task}
            id={task.id}
            key={task.id}
            title={props.isTask}
            isDone={task.isDone}
          />)
      ))} */}
    </main>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.checkTask.tasks,
});



export default connect(mapStateToProps)(Main);
