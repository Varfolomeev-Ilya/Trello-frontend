import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    height: 'auto',
  },
  typography: {
    padding: theme.spacing(0),
    textAlign: 'center',
  },
  paper: {
    height: 'auto',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'solid 1px',
    borderRadius: '10px',
    borderColor: '#b32020',
  }
}));

const StyledForm = styled.form`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  width: 170px;
  font-size: 14px;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  background-color: #fafbfc;
  outline: none;
  border: none;
`;

const StyledP = styled.p`
  /* margin: 0 auto, */
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  width: 200px;
  border-radius: 3px;
  text-decoration: none;
  transition-property: background-color,border-color,box-shadow;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  transition-duration: 85ms;
  transition-timing-function: ease;
  margin: 0 auto;
  margin-top: 10px
`;

export { StyledForm, StyledInput, StyledButton, StyledP, StyledDiv }
export default useStyles;