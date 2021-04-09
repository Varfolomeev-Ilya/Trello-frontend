import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../../store/boards';
import { postBoard } from '../../../../api/boardsRequests'
import { StyledContainer, StyledSpan, StyledInput } from './CreateBoardStyled'

function CreateBoard() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.allBoards);
  const userInfo = useSelector((state) => state.users.registeredUser);
  const [inputValue, setInputValue] = React.useState('');
  const id = userInfo.id;
  const email = userInfo.email;

  const onChangeInputValue = event => {
    setInputValue(event.target.value);
  };

  const addBoard = async () => {
    if (inputValue) {
      const newBoard = {
        name: inputValue,
        id,
        email,
      }
      try {
        const response = await postBoard(newBoard);
        const newBoards = [...boards, response.data]
        dispatch(createBoard(newBoards));
      } catch (error) {
        alert(error)
      }
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
        placeholder='Enter name board'
      />
    </StyledSpan>
  </StyledContainer>
)}

export default CreateBoard;