import React from 'react';
import { StyledSpan, StyledBoards, StyledP } from './BoardsContainerStyled';
import { Link } from 'react-router-dom';

function BoardCard({ id,name }) {
  
    return (
    <>
        <StyledBoards>
          <Link  to={`/boards/${id}`}/>
          <StyledSpan>
            <StyledP key={name}>{name}</StyledP>
          </StyledSpan>
        </StyledBoards>
    </>
  )
}

export default BoardCard;