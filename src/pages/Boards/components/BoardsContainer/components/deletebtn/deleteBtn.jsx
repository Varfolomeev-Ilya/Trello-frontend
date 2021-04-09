import React from 'react';
import { deleteBoard } from '../../../../../../api/boardsRequests';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../../../../store/boards'

function DeleteBtn(id) {
  const dispatch = useDispatch();
  const handleClick = async () => {
   try {
    const response = await deleteBoard(id);
    const boards = useSelector((state) => state.boards.allboards);
    const filteredBoards = boards.filter(board => board.id !== id)
    dispatch(createBoard(filteredBoards))
    alert(response)
   }catch (error) {
     alert(error)
   }
  } 

  return(
    <btn
    onClick={handleClick}
    >delete</btn>
  )
}

export default DeleteBtn;