import React from 'react';
import Navigation from '../../ui/components/Navigation/Navigation';
import BoardCard from './components/BoardCard/BoardCard';
import { useSelector, useDispatch } from 'react-redux';
import { StyledSection, StyledContainer } from './BoardsStyled';
import CreateBoard from './components/CreateBoard/CreateBoard';
import { getBoards } from '../../api/boardsRequests';
import { createBoard } from '../../store/boards';
import CircularIndeterminate from '../../ui/components/Spinner/Spinner'

function Boards() {
  const dispatch = useDispatch(); 
  const currentUser = useSelector((state) => state.users.registeredUser);
  const userId = currentUser.id;
  const [isLoading, setIsLoading] = React.useState(false);
  const getAllBoards = async () => {
    setIsLoading(true);
    try{
      const response = await getBoards(userId);
      dispatch(createBoard(response.data));
    }catch(error) {
      console.log(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  const boards = useSelector((state) => state.boards.allBoards);
  React.useEffect(() => {
    getAllBoards();
  }, []);
  return (
    <>
    {isLoading ? (
      <>
      <CircularIndeterminate/>
      </>
    ) : (
      <>
      <Navigation/>
      <StyledSection>
       <StyledContainer>
       <CreateBoard />
        {boards.map((board) => (
          <BoardCard id={board.id} key={board.id} name={board.name} />
        ))}
       </StyledContainer>
      </StyledSection>
      </>
    )}
    </>
  );
};

export default Boards;