import React from 'react';
import { connect } from 'react-redux';
import { changeInputValue } from '../../store/store'

function TaskInput(props) {

  const addTask = () => {
    // const {input} = event.target.value;
    // if (input) {
    //   addTask(input);
    //   // this.setState({input: ''});
    //   props.onChangeIsTask({input: ''})
    // }
    // props.setTasks()
  };

  const handleEnter = event => {
    if (event.key === 'Enter')
      addTask();
  };

  const inputChange = (event) => {
    props.onChangeIsTask(event.target.value);
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

const mapDispatchToProps = (dispatch) => ({
  onChangeIsTask: (inputValue) => dispatch(changeInputValue(inputValue)),
  setTasks: (tasks) => dispatch(changeInputValue(tasks)),
});

const mapStateToProps = (state) => ({
  inputValue: state.checkTask.inputValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);
