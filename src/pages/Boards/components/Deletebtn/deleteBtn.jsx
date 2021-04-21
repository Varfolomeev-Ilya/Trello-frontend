import React from 'react';
import styled from 'styled-components';
import { deleteBoard } from '../../../../api/boardsRequests';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../../store/boards';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledButton = styled.button`
  border-style: none;
  background-color: white;
  cursor: pointer;
`;

function DeleteBtn({boardId}) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.allBoards);

  const handleClick = async () => {
    try {
      await deleteBoard(boardId);
      const newBoards = boards.filter((board) => board.id !== boardId);
      dispatch(createBoard(newBoards))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledButton
      onClick={handleClick}
    >
      <DeleteIcon/>
    </StyledButton>
  )
}

export default DeleteBtn;