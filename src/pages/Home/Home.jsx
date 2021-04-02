import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation'; 
import { Styledsection, StyledDiv } from './HomeStyled';
import Board from '../../components/board/board'

function HomePage() {
  return(
    <>
      <Navigation/>
        <Styledsection>
        <StyledDiv>
        <Board/>
        </StyledDiv>
        <StyledDiv>2</StyledDiv>
        <StyledDiv>3</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>5</StyledDiv>                    
        </Styledsection>
    </>
  );
};

export default HomePage;