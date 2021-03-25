import React from 'react';
import Header from '../../ui/components/Header/Header'
import Footer from '../../ui/components/Footer/Footer'
import { StyledBody } from './SignupStyled';
import { StyledHr } from '../../ui/components/HrStyled/HrStyled';
import SignUpForm from './components/Form/FormSignup'
import GlobalStyle from '../../ui/styles/GlobalStyles';

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
      <SignUpForm/>
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
