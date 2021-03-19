import React from 'react';
import background from '../../ui/images/bodyPicture-main.png';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody,StyledSection,StyledForm,StyledInput,StyledDiv,StyledH2 } from '../SignIn/SignInStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import { StyledButton, StyledH3 } from '../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton,StyledSpan } from '../../ui/components/Buttons/LoginBtnStyled';
import { StyledSpanLog } from '../../ui/components/StyledA';
import FollowLinkIn from './components/LinkIn';
import { connect } from 'react-redux';
import { changeIsAuthentification } from '../../store/store.js';
import { Link } from  'react-router-dom'


function Signup (props) {
  const onLogin = () => {
    props.onChangeIsAuthenticated(true)};
    
  return(
    <StyledBody  style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <StyledSection>
        <StyledForm>
          <StyledDiv>
            <StyledH2>Sign up for your account</StyledH2>
            <StyledInput placeholder="Enter email"></StyledInput>
              <StyledButton type='button' onClick={onLogin}>
                <Link to='/home'><StyledH3>Continue</StyledH3></Link>
              </StyledButton>
            <StyledH2>or</StyledH2>
            <StyledLoginButton>
              <StyledSpan>Continue with Google</StyledSpan>
            </StyledLoginButton>
            <StyledLoginButton>
              <StyledSpan>Continue with Microsoft</StyledSpan>
            </StyledLoginButton>
            <StyledLoginButton>
              <StyledSpan>Continue with Apple</StyledSpan>
            </StyledLoginButton>
            <StyledSpanLog>
              <FollowLinkIn/>
            </StyledSpanLog>
          </StyledDiv>
        </StyledForm>
      </StyledSection>
      <StyledHr/>
      <Footer/>
    </StyledBody>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onChangeIsAuthenticated: (isAuthentificated) => dispatch(changeIsAuthentification(isAuthentificated)),
});

export default connect(null, mapDispatchToProps)(Signup);
