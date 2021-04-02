import React from 'react';
// import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue, changeBlurInputValue, setTasks,
  //  filterTasks
   } from '../../store/tasks'


function Table(props) {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) =>state.tasks.inputValue)
  const tasks = useSelector((state) => state.tasks.allTasks)
  const onChangeInputValue = event => {
    dispatch(changeInputValue(event.target.value))
  };

  const changesBlurInputValue = event => {
    dispatch(changeBlurInputValue(event.target.value))
  };
  
  const changeTasksArr = (arr) => {
    dispatch(setTasks(arr));
    localStorage.setItem('todos', JSON.stringify(arr))
  };
  const addTasks = () => {
    const newTask = {
      id: Date.now(),
      title: `${inputValue}`,
      isDone: false,
      isInput: false
    }
    const updatedTasks = [newTask,...tasks];
    // changeTasksArr(updatedTasks);
    dispatch(setTasks(updatedTasks));
  };

  const addTask = () => {
    if (`${inputValue}`) {
      addTasks(`${inputValue}`);
      dispatch(changeInputValue(''))
    }
  };

  const checkAll = (...props) => {
    const everyDone = props.tasks.every(item => item.isDone);
    const tasks = props.tasks.map(item => {
      item.isDone = !everyDone;
      return item;
    });
    changeTasksArr(tasks);
  }

  const handleEnter = event => {
    if (event.key === 'Enter')
      addTask(dispatch(setTasks(event.target.value)));
  };

  // mark

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
    props.isTask({
      activeFilter: event.target.id
    });
  }

  return (
    <>
      {/* <Header/> */}
      <input
        addTask={addTask}
        onKeyPress={handleEnter}
        onChange={onChangeInputValue}
        inputValue={`${inputValue}`}
        onAddBtnClick={addTask}
        onCheckAllBtnClick={checkAll}
      />
      <Main
        tasks={props.tasks}
        onDoneBtnClick={checkTask}
        onDeleteBtnClick={deleteTask}
        onTaskDblClick={handleTaskDblClick}
        onInputBlur={handleInputBlur}
        onBlurInputChange={changesBlurInputValue}
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

export default Table;