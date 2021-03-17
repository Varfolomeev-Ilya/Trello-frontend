import React from 'react';
import { StyledHeader, StyledH1 } from './NavigationStyled';
import './NavigationStyled.js';

function Header () {
  return(
    <>
    <StyledHeader>
      <StyledH1>Trello</StyledH1>
    </StyledHeader>
    </>
  )
}

export default Header;