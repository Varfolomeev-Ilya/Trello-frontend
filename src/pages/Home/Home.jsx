import React from 'react';
import Navigation from '../../ui/components/Navigation/Navigation';
import { Styledsection, StyledDiv } from './HomeStyled';

function HomePage() {
  return (
    <>
      <Navigation />
      <Styledsection>
        <StyledDiv>1</StyledDiv>
        <StyledDiv>2</StyledDiv>
        <StyledDiv>3</StyledDiv>
        <StyledDiv>4</StyledDiv>
        <StyledDiv>5</StyledDiv>
      </Styledsection>
    </>
  );
};

export default HomePage;