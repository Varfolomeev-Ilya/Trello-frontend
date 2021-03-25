import React from 'react';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody} from './SignInStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import GlobalStyle from '../../ui/styles/GlobalStyles';
import SigninForm from './components/Form/FormSignin';

function Signin() {
  return (
    <StyledBody>
      <GlobalStyle />
      <Header />
      <SigninForm/>
      <StyledHr />
      <Footer />
    </StyledBody>
  )
}

export default Signin;
