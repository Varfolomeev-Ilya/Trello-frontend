import React from 'react';
import background from '../../ui/images/bodyPicture-main.png';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody,StyledSection,StyledForm,StyledInput,StyledDiv,StyledH2,StyledUl,StyledLi} from './SignInStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import { StyledButton, StyledH3 } from '../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton,StyledSpan  } from '../../ui/components/Buttons/LoginBtnStyled';
import FollowLink from './components/LinkUp'

function Signin () {
  return(
    <StyledBody  style={{ backgroundImage: `url(${background})` }}>
      <Header/>
        <StyledSection>
          <StyledForm>
            <StyledDiv>
              <StyledH2>Log in to Trello</StyledH2>
              <StyledInput placeholder="Enter email"></StyledInput>
              <StyledInput placeholder="Enter password"></StyledInput>
              <StyledButton>
                <StyledH3>Log in</StyledH3>
              </StyledButton>
              <StyledH2>or</StyledH2>
              <FollowLink/>
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
      <StyledHr/>
      <Footer/>
    </StyledBody>
  )
}

export default Signin;
