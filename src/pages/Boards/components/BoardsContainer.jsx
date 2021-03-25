import React from 'react';
import { StyledContainer, StyledMenu, StyledBtnContainer, StyledUl, StyledLi, StyledSpan, StyledBoards, StyledH2, LinkHome } from './BoardsContainerStyled';;;

function BoardContainer() {
  return(
    <StyledContainer>
      <StyledMenu>
        <StyledBtnContainer>
          <StyledUl>
            <StyledLi>
              <StyledSpan>
              <StyledH2>Create board</StyledH2>
              </StyledSpan>
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
    </StyledContainer>
  )
}

export default BoardContainer;