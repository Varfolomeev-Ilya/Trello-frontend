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

// BOARDS
const StyledBoards = styled.div`
  background-size: cover;
  background-position: 50%;
  color: #fff;
  line-height: 20px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  box-sizing: border-box;
  padding: 4px 8px;
  width: 20%;
  cursor: pointer;
`;
const StyledSpan = styled.span`
  background-color: rgba(9,30,66,.04);
  box-shadow: none;
  border: none;
  color: #172b4d;
  display: table-cell;
  height: 80px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  width: inherit;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
`;
const StyledP = styled.p`
  margin: 0 0 8px;
`;
export { 
  StyledContainer, StyledMenu, StyledBtnContainer,
  StyledUl, StyledLi, StyledSpan, StyledBoards,
  StuledButton, StyledH2,LinkHome,StyledP
}
