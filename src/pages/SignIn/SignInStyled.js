import styled from 'styled-components';

const StyledBody = styled.body`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: 100% 100%;
  width: 100%;
  height: auto;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 600px;
  padding: 0px;
  overflow: visible;
`;

const StyledForm = styled.form`
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

const StyledInput = styled.input`
  margin: 0 0 1.2em;
  opacity: 0.5;
  width: 410px;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0 auto;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLi = styled.li`
  padding: 10px 10px;
`;


export { 
  StyledBody,StyledSection,StyledForm,
  StyledInput,StyledDiv,StyledH2,
  StyledUl,StyledLi
} ;
