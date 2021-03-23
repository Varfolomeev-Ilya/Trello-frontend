import React from 'react';
// import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { connect } from 'react-redux';
import { changeInputValue } from '../../store/store'

function Table(props) {
  
  const onChangeInputValue = event => {
    props.letChangeInputValue(
      event.target.value
    );
  };

  const changeBlurInputValue = event => {
    props.setBlurInputValue(
     event.target.value
    );
  };

  const changeTasksArr = arr => {
    props.setTasks(
      arr
    );
  };  

  const addTasks = (inputValue) => {
    const newTask = {
      id: Date.now(),
      title: inputValue,
      isDone: false,
      isInput: false
    }
    const updatedTasks = [newTask];
    changeTasksArr(updatedTasks);
  };

  const addTask = () => {
    addTasks();
    props.setTasks(props.tasks);
  };

  // const checkAll = (...props) => {
  //   const everyDone = props.tasks.every(item => item.isDone);
  //   const tasks = props.tasks.map(item => {
  //     item.isDone = !everyDone;
  //     return item;
  //   });
  //     changeTasksArr(tasks);
  // }

  const handleEnter = event => {
    if (event.key === 'Enter')
      addTask();
      props.setTasks(props.tasks);
  };

  const deleteTask = (id, ...props) => {
    const filteredTasks = props.tasks.filter(item => id !== item.id);
    changeTasksArr(filteredTasks);
  };

  const checkTask = id => {
    const isDoneTasks = props.tasks.map(item => {
      if (id === item.id) {
        item.isDone = !item.isDone;
      };
      return item;
    });

    changeTasksArr(isDoneTasks);
  };

  const handleClearComplited = () => {
    const clearComplited = props.isTask.tasks.filter(item => !item.isDone);

    changeTasksArr(clearComplited);
  };

  const handleTaskDblClick = id => {
    const isInputTasks = props.isTask.map(item => {
      if (id === item.id) {
        item.isInput = true;
        props.isTask({
          blurInputValue: item.title
        });
      };

      return item;
    });

    changeTasksArr(isInputTasks);
  }

  const handleInputBlur = id => {
    const newTasks = props.isTask.tasks.map(item => {
      if (id === item.id) {
        item.title = props.isTask.blurInputValue;
        item.isInput = false;
      };

      return item;
    });

    changeTasksArr(newTasks);
  }

  const handleFilterBtnClick = event => {
    props.isTask ({
      activeFilter: event.target.id
    });
  }

    return (
      <>
        <input
          addTask={addTask}
          onKeyPress={handleEnter}
          onChange={onChangeInputValue}
          // inputValue={this.inputValue}
          // onAddBtnClick={addTask}
          // onCheckAllBtnClick={checkAll}
        />
        <Main
          tasks={props.tasks}
          onDoneBtnClick={checkTask}
          onDeleteBtnClick={deleteTask}
          onTaskDblClick={handleTaskDblClick}
          onInputBlur={handleInputBlur}
          onBlurInputChange={changeBlurInputValue}
          blurInputValue={props.blurInputValue}
          // activeFilter={props.isTask.activeFilter}
        />
        <Footer
          // allTasks={props.tasks}
          onClearComplited={handleClearComplited}
          onFilterBtnClick={handleFilterBtnClick}
        />
      </>
    );
};

const mapDispatchToProps = (dispatch) => ({
  letChangeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
  setBlurInputValue: (blurInputValue) => dispatch(changeInputValue(blurInputValue)),
  setTasks: (tasks) => dispatch(changeInputValue(tasks)),
});

const mapStateToProps = (state) => ({
  inputValue: state.checkTask.inputValue,
  blurInputValue: state.checkTask.blurInputValue,
  // tasks: state.checkTasks.tasks
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
