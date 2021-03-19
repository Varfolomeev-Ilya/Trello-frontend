import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
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

const StyledAppBar = styled(AppBar)`
  background-color: #cc1919e3;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 200;
  line-height: 1.5;
  padding-top: 6px;
`;

export { StyledDiv, StyledH1,StyledAppBar,StyledLink }