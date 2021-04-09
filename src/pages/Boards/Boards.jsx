import React from 'react';
import Navigation from '../../ui/components/Navigation/Navigation';
import BoardCard from './components/BoardsContainer/BoardCard.jsx';
import { useSelector } from 'react-redux';
import { StyledSection } from './BoardsStyled';
import CreateBoard from './components/CreateBoard/CreateBoard'

function Boards() {
  const boards = useSelector((state) => state.boards.allBoards);

  return (
    <>
      <Navigation />
      <StyledSection>
        <CreateBoard />
        {boards.map((board) => (
          <>
          <BoardCard id={board.id} key={board.id} name={board.name} />
          </>
        ))}
      </StyledSection>
    </>
  );
};

export default Boards;