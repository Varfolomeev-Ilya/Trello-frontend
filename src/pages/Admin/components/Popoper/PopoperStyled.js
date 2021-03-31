import styled from 'styled-components';

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
  width: 200px;
  margin: 10px auto;
  font-size: 14px;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  border-radius: 3px;
  padding: 8px 12px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  background-color: #fafbfc;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  width: 100px;
  border-radius: 3px;
  text-decoration: none;
  transition-property: background-color,border-color,box-shadow;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  transition-duration: 85ms;
  transition-timing-function: ease;
  margin: 0 auto;
`;

export { StyledForm, StyledInput, StyledButton }