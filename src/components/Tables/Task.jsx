import React from 'react';

function Task(props) {
  const className = 'task' + (props.isDone ? 'task-done' : '');

  return(
    <div onDoubleClick={() => props.onTaskDblClick(props.id)} className={className}>
      <p>{props.title}</p>
      <div>
        <p onClick={() => props.onDoneBtnClick(props.id)}>✅</p>
        <p onClick={() => props.onDeleteBtnClick(props.id)}>❎</p>
      </div>
    </div>
  );
};

export default Task;
