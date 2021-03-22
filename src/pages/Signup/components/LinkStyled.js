import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  opacity: 0.5;
  margin-top: 10px;
  box-shadow: rgb(0 0 0 / 100%) 0 0 20px; 
  margin: 0 auto;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer
`;

const StyledA = styled.a`
  margin: 0 auto;
  color: rgba(0,0,0,1);
  width: 70%;
  text-align: center;
`;

export { StyledLink, StyledA };