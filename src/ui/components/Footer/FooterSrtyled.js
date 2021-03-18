import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;  
  height: 100px;
  background-color: #b51a4514;
`;

const StyledDiv = styled.div`
  min-width:320px;
  height:auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`;

const StyledH2 = styled.h2`
  color: rgba(9,9,14,0.41);
  letter-spacing: -0.01em;
  line-height: 28px;
  margin: 10px auto
`;

export { StyledFooter,StyledDiv,StyledH2 };