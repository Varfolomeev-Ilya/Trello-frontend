import React from 'react';
// import { useState , usersReducer } from 'react-redux';

function TaskInput() {

  const addTask = (event) => {
    const {input} = event.target.value;
    if (input) {
      addTask(input);
    }
    
  };

  const handleEnter = event => {
    if (event.key === 'Enter')
      addTask();
  };

  const inputChange = (event) => {
  };

  return (
    <header>
      <h1>Table</h1>
      <input
        onKeyPress={handleEnter}
        onChange={inputChange}
        placeholder="what needs to be done?"
      />
      <button onClick={addTask}>Add</button>
    </header>
  )
}


export default TaskInput;