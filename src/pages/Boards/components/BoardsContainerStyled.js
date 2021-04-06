import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

// BOARDS
const StyledBoards = styled.div`
  background-color: rgba(9,30,66,.04);
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
  StuledButton, StyledH2, LinkHome, StyledP
}
