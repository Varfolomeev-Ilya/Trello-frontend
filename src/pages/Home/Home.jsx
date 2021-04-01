import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation'; 
import { Styledsection, StyledDiv } from './HomeStyled';
import Table from '../../components/Tables/Table' 

function HomePage() {
  return(
    <>
      <Navigation/>
        <Styledsection>
        <StyledDiv>
          <Table/>
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