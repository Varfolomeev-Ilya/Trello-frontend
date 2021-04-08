import React from 'react';
import { StyledButton, StyledH3 } from '../../../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../../../ui/components/Buttons/LoginBtnStyled';
import { postLoginUser } from '../../../../api/authApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FollowLink from '../../../../ui//components/Link/LinkUp';
import { Link } from 'react-router-dom';
import { StyledSection, StyledContainer, StyledInput, StyledDiv, StyledH2, StyledUl, StyledLi, StyledForm } from './FormSigninStyled';
import { StyledMsg } from '../../../../ui/components/Message/MessageStyled';
import * as validation from '../../../../utils/validationConsts';
import { regUser } from '../../../../store/users'
import { useDispatch } from 'react-redux';
// import AdminPopper from '../../../Admin/components/Popoper/PopoperStyled'


function SigninForm() {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({

    initialValues: {
      email: 'admin@admin.com',
      password: 'admin1234'
    },
    validationSchema: Yup.object({
      email:
        Yup
          .string()
          .trim()
          .email()
          .max(validation.EMAIL_LENGTH, validation.EMAIL_LENGTH_MESSAGE)
          .required(validation.EMAIL_REQUIRED_MESSAGE)
          .matches(validation.EMAIL_MATCHES, validation.EMAIL_MATCHES_MESSAGE),
      password:
        Yup
          .string()
          .trim()
          .min(validation.PASSWORD_LENGTH, validation.PASSWORD_LENGTH_MESSAGE)
          .required(validation.PASSWORD_REQIERED_MESSAGE)
          .matches(validation.PASSWORD_MATCHES, validation.PASSWORD_MATCHES_MESSAGE),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        const response = await postLoginUser({ email: email, password: password });
        localStorage.setItem('isAuthenticated', JSON.stringify(response.data.tokens.accessToken));
        alert(JSON.stringify(response.data.message));
        dispatch(regUser(response.data.user));
      }
      catch (error) {
        alert(error.response.data.message);
      };
    }
  })

  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledDiv>
            <StyledH2>Log in to Trello</StyledH2>
            <StyledForm
              className='form-data'
              method='POST'
              onSubmit={handleSubmit}
            >
              <StyledInput
                type='email'
                name='email'
                placeholder='Enter email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <StyledMsg>{errors.email}</StyledMsg>
              ) : null}
              <StyledInput
                type='password'
                name='password'
                placeholder='Enter password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password ? (
                <StyledMsg>{errors.password}</StyledMsg>
              ) : null}
              <StyledButton type='submit'>
                <Link to='/home' />
                <StyledH3>Log in</StyledH3>
              </StyledButton>
            </StyledForm>
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
        </StyledContainer>
      </StyledSection>
    </>
  )
}

export default SigninForm;