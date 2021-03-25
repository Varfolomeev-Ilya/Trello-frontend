import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation'; 
import BoardContainer from './components/BoardsContainer'

function Boards() {
  return(
    <>
    <Navigation/>
    <BoardContainer/>
    </>
  );
};

export default Boards;