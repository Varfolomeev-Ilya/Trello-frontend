import React from 'react';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import FollowLinkIn from './components/LinkIn';
import { StyledBody, StyledSection, StyledContainer, StyledInput, StyledDiv, StyledH2, StyledFormInput } from '../SignIn/SignInStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import { StyledButton, StyledH3 } from '../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../ui/components/Buttons/LoginBtnStyled';
import { StyledSpanLog } from '../../ui/components/StyledA';
// import { connect } from 'react-redux';
// import { changeIsAuthentification } from '../../store/store.js';
// import { Link } from 'react-router-dom';
import GlobalStyle from '../../ui/styles/GlobalStyles';
import { signUp } from '../../api/authApi'

function Signup() {
  // const signUp = async (ev) => {
  //   try {
  //     ev.preventDefault();

  //     const response = await signUp({ email: '' });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const dispatch = useDispatch();

  // const user = useSelector((store)=>store.main.user);

  return (
    <StyledBody>
      <GlobalStyle />
      <Header />
      <StyledSection>
        <StyledContainer>
          <StyledDiv>
            <StyledH2>Sign up for your account</StyledH2>
            <StyledFormInput class='form-data' method='post'>
              <StyledInput required type='email' name='email' placeholder="Enter email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"></StyledInput>
              <StyledInput required type='password' name='password' placeholder="Enter password" ></StyledInput>
              <StyledButton type='submit' onClick={signUp}>
                <StyledH3>Continue</StyledH3>
              </StyledButton>
            </StyledFormInput>
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
              <FollowLinkIn />
            </StyledSpanLog>
          </StyledDiv>
        </StyledContainer>
      </StyledSection>
      <StyledHr />
      <Footer />
    </StyledBody>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   onChangeIsAuthenticated: (isAuthentificated) => dispatch(changeIsAuthentification(isAuthentificated)),
// });

// export default connect(null, mapDispatchToProps)(Signup);]

export default Signup;
