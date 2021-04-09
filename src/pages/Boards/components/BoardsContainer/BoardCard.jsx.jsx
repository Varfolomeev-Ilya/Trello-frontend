import React from 'react';
import { StyledSpan, StyledBoards, StyledP } from './BoardsContainerStyled';
import { Link } from 'react-router-dom';
import DeleteBtn from './components/deletebtn/deleteBtn';

function BoardCard({ id, name }) {

  return (
    <>
      <StyledBoards>
        <Link to={`/boards/${id}`} />
        <StyledSpan>
          <StyledP key={name}>{name}</StyledP>
          <DeleteBtn id={id}/>
        </StyledSpan>
      </StyledBoards>
    </>
  )
}

export default BoardCard;