import React from 'react';

function Footer(props) {
  // const allTasks = props.allTasks;
  // const completedTasks = allTasks.filter(item => item.isDone);
  // const itemsLeft = allTasks.filter(item => !item.isDone);

  return (
    <footer>
      <ul>
        <li>
          {/* <a id="left" onClick={props.onFilterBtnClick}>Items left: {itemsLeft.length}</a>
        </li>

        <li>
          <a id="completed" onClick={props.onFilterBtnClick}>Completed: {completedTasks.length}</a>
        </li>

        <li>
          <a id="all" onClick={props.onFilterBtnClick}>All: {allTasks.length}</a>
        </li>

        <li>
          <button type="button" onClick={props.onClearComplited}>Clear complited</button> */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
