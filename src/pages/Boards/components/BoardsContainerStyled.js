import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const StyledMenu = styled.div`
  margin: 40px 0 0;
  padding: 0 16px;
  width: 240px;
`;

const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 12px;
`;

const StyledLi = styled.li`
  margin-bottom: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  width: 100%;
  margin: 0 auto;
`;

const StyledBoards = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
`;

const StuledButton = styled.button`
  
`;

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

const LinkHome = styled(Link)`
  text-decoration: none;
  color: black;
`;

export { 
  StyledContainer, StyledMenu, StyledBtnContainer,
  StyledUl, StyledLi, StyledSpan, StyledBoards,
  StuledButton, StyledH2,LinkHome
}
