import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation'; 
import { Styledsection, StyledDiv } from './HomeStyled';
// import Table from '../../components/Tables/Table';
import Sidebar from '../../ui/containers/Sidebar/Sidebar';
// import { getRequest } from '../../api/usersRequests'

function HomePage() {
  return(
    <>
      <Navigation/>
        <Styledsection>
        <Sidebar/>
        <StyledDiv>
          {/* <Table/> */}
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