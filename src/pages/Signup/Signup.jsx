import React from 'react';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody } from './SignupStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import SignUpForm from './components/Form/FormSignup'
import GlobalStyle from '../../ui/styles/GlobalStyles';

function Signup() {
   return (
    <StyledBody>
      <GlobalStyle />
      <Header />
      <SignUpForm/>
      <StyledHr />
      <Footer />
    </StyledBody>
  );
};

export default Signup;
