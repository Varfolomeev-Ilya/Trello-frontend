import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard, boardInputValue } from '../../store/boards';
// import { postBoard } from '../../api/boardsRequests'
import { StyledContainer, StyledSpan, StyledInput } from './CreateBoardStyled'

function CreateBoard() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.allBoards);
  const [inputValue, setInputValue] = React.useState('');

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
    <StyledContainer>
    <StyledSpan>
      <StyledInput
        value={inputValue}
        onKeyPress={handleEnter}
        onChange={onChangeInputValue}
        placeholder="Enter name board"
      />
    </StyledSpan>
    </StyledContainer>
  )
}

export default CreateBoard;