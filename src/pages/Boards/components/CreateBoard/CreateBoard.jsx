import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../../../store/boards';
import { postBoard } from '../../../../api/boardsRequests'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    background-color: rgba(9,30,66,.04);
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 58px;
`;

function CreateBoard() {
  const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            backgroundColor: '#ebecf0',
            borderStyle: 'none',
            borderRadius: '3px',
            marginLeft: '8px',
        },
    },
}));
const classes = useStyles();

  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.allBoards);
  const userInfo = useSelector((state) => state.users.registeredUser);
  const [inputValue, setInputValue] = React.useState('');
  const id = userInfo.id;
  const email = userInfo.email;

  const onChangeInputValue = event => {
    setInputValue(event.target.value);
  };

  const addBoard = async () => {
    if (inputValue) {
      const newBoard = {
        name: inputValue,
        id,
        email,
      }

      try {
        const response = await postBoard(newBoard);
        const newBoards = [...boards, response.data]
        dispatch(createBoard(newBoards));
      } catch (error) {
        alert(error)
      }
    }
  
};

const handleEnter = event => {
  if (event.key === 'Enter') {
    addBoard();
    setInputValue('');
  }
};

return (
  <StyledContainer>
      <TextField
            className={classes.root}
            color={'secondary'}
            id="outlined-secondary"
            label="Enter name board"
            variant="outlined"
            value={inputValue}
            onKeyPress={handleEnter}
            onChange={onChangeInputValue}
        />
  </StyledContainer>
)}

export default CreateBoard;