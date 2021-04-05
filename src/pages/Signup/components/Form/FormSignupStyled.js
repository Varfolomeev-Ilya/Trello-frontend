import styled from 'styled-components';

const StyledSection = styled.section`
  height: 600px;
  padding: 0px;
  overflow: visible;
`;

const StyledContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgb(0 0 0 / 30%)  0px 20px 10px;;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 20px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
`;
const StyledFormInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;
const StyledInput = styled.input`
  margin-bottom: 5px;
  opacity: 0.5;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cecece;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
`;

const StyledLi = styled.li`
  padding: 10px 10px;
`;

const StyledMsg = styled.div`
  margin: 0 auto;
  margin-bottom: 5px;
`;

export {
  StyledSection, StyledInput, StyledDiv, StyledH2,
  StyledUl, StyledLi, StyledFormInput,
  StyledContainer, StyledMsg
};
