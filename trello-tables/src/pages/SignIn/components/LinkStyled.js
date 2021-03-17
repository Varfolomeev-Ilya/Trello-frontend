import styled from 'styled-components';
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
  width: 100px;
  height: 27px;
  opacity: 0.5;
  margin-top: 10px;
  box-shadow: rgb(0 0 0 / 100%) 0 0 20px; 
  background-color: #66297191;
  margin: 0 auto;
  margin-bottom: 10px;
  cursor: pointer
`;

const StyledH3 = styled.h3`
  margin: 0 auto;
  color: rgba(0,0,0,1);
  width: 70%;
  text-align: center;
`;

export { StyledLink, StyledH3 };