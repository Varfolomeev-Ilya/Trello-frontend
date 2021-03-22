import React from 'react';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody, StyledSection, StyledForm, StyledInput, StyledDiv, StyledH2, StyledUl, StyledLi } from './SignInStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import { StyledButton, StyledH3 } from '../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../ui/components/Buttons/LoginBtnStyled';
import FollowLink from './components/LinkUp';
import GlobalStyle from '../../ui/styles/GlobalStyles';

function Signin() {
  return (
    <StyledBody>
      <GlobalStyle />
      <Header />
      <StyledSection>
        <StyledForm>
          <StyledDiv>
            <StyledH2>Log in to Trello</StyledH2>
            <StyledInput required type='email' name='email' placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></StyledInput>
            <StyledInput required type='password' name='password' placeholder="Enter password" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{6,}"></StyledInput>
            <StyledButton>
              <StyledH3>Log in</StyledH3>
            </StyledButton>
            <StyledH2>or</StyledH2>
            <FollowLink />
            <StyledLoginButton>
              <StyledSpan>Continue with Google</StyledSpan>
            </StyledLoginButton>
            <StyledLoginButton>
              <StyledSpan>Continue with Microsoft</StyledSpan>
            </StyledLoginButton>
            <StyledLoginButton>
              <StyledSpan>Continue with Apple</StyledSpan>
            </StyledLoginButton>
            <StyledUl>
              <StyledLi>
                <StyledH2>Privacy Policy</StyledH2>
              </StyledLi>
              <StyledLi>
                <StyledH2>Terms of Service</StyledH2>
              </StyledLi>
            </StyledUl>
          </StyledDiv>
        </StyledForm>
      </StyledSection>
      <StyledHr />
      <Footer />
    </StyledBody>
  )
}

export default Signin;
