import React from 'react';
import { StyledContainer, StyledMenu, StyledBtnContainer, StyledUl, StyledLi, StyledSpan, StyledBoards, StyledH2, LinkHome } from './BoardsContainerStyled';
import { postBoard } from '../../../api/boardsRequests';

function BoardContainer() {
  const handleClick = () => {
    postBoard({name:'firstBoard', id:'4', email:'admin@admin.com'})
  }
  return(
    <>
      <StyledMenu>
        <StyledBtnContainer>
          <StyledUl>
            <StyledLi>
              <button onClick={handleClick}>
              <StyledH2>Create board</StyledH2>
              </button>
            </StyledLi>
            <StyledLi>
            <StyledSpan>
              <LinkHome to='/home'>
              <StyledH2>Home</StyledH2>
              </LinkHome>
            </StyledSpan>
            </StyledLi>
            <StyledLi>
            <StyledSpan>
            <StyledH2>Any</StyledH2>
            </StyledSpan>
            </StyledLi>
          </StyledUl>
        </StyledBtnContainer>
      </StyledMenu>
      <StyledBoards>123</StyledBoards>
    </>
   )
}

export default BoardContainer;