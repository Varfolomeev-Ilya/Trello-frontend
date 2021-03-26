import React from 'react';
import { StyledButton, StyledH3 } from '../../../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../../../ui/components/Buttons/LoginBtnStyled';
import { postLoginUser } from '../../../../api/authApi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FollowLink from '../../components/LinkUp';
import { Link } from 'react-router-dom'
import { StyledContainer, StyledInput, StyledDiv, StyledH2, StyledUl, StyledLi, StyledForm, StyledMsg } from './FormSigninStyled';

function SigninForm() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: 'testuser5@test.ru',
      password: 'test1234'
    },
    validationSchema: Yup.object({
      email: Yup.string().max(20, 'Email must be shorter than 20 characters').required('Recuired'),
      password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Recuired')
    }),
    onSubmit: ({ email, password }) => {
      postLoginUser({ email: email, password: password })
    }
  })
  return (
    <>
      <StyledContainer>
        <StyledDiv>
          <StyledH2>Log in to Trello</StyledH2>
          <StyledForm
            class="form-data"
            method="POST"
            onSubmit={handleSubmit}
          >
            <StyledInput
              type='email'
              id='email'
              name='email'
              placeholder="Enter email"
              pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <StyledMsg>{errors.password}</StyledMsg>
            ) : null}
            {/* <StyledButton> */}
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
    </>
  )
}

export default SigninForm