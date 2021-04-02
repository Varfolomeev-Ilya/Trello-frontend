import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard, boardInputValue } from '../../store/boards';
import { postBoard } from '../../api/boardsRequests'

function Board() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.allBoards);
  const [inputValue, setInputValue] = React.useState('');
  
  const handleClick = () => {
    postBoard({name:'firstBoard', id:'4', email:'admin@admin.com'});
    addBoard()
  }
  
  const onChangeInputValue = event => {
    setInputValue(event.target.value);
  };

  const addBoard = () => {
    if (inputValue) {
      const newBoard = {
        id: Date.now(),
        name: inputValue,
      }
      const newBoards = [newBoard, ...boards];
      dispatch(createBoard(newBoards));
    }
  };

  const handleEnter = event => {
    if (event.key === 'Enter')
      addBoard();
  };

  return (
    <>
      <input
        value={inputValue}
        onKeyPress={handleEnter}
        onChange={onChangeInputValue}
        placeholder="Enter name board"
      />
      <button onClick={handleClick}>add</button>
      {boards.map(({name}) =>
          <>
            <p key={name}>{name}</p>
          </>
        )}
    </>
  )
}

export default Board;