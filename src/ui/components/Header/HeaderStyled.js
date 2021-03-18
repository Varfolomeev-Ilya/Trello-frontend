import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  max-height: 300px;
  background-color: #b51a4514;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
  box-shadow: rgb(0 0 0 / 30%) 0px 20px 10px;
`;

const StyledH1 = styled.h1`
  color: rgba(9, 9, 14, 0.41);
  font-size: 50px;
  font-weight: 100;
  width: 100px;
`;

export { StyledHeader, StyledH1 } ;