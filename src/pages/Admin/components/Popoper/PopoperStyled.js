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
    height: '400px',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-around',
    border: 'solid 1px',
    borderRadius: '10px',
    borderColor: '#b32020',
  },
  textField: {
    marginBottom: '10px',
  },
}));

const StyledForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
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

export { StyledForm, StyledButton }
export default useStyles;