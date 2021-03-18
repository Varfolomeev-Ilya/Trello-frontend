import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation'; 
import { StyledBody, StyledDiv } from './HomeStyled'

function HomePage() {
  return(
    <>
      <Navigation/>
        <StyledBody>
        <StyledDiv>1</StyledDiv>
        <StyledDiv>2</StyledDiv>
        <StyledDiv>3</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>5</StyledDiv>                    
        </StyledBody>
      
      
    </>
  );
}

export default HomePage;