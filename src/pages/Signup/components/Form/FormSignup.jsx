import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FollowLinkIn from '../LinkIn';
import { StyledSection, StyledContainer, StyledInput, StyledDiv, StyledH2, StyledFormInput, StyledMsg } from './FormSignupStyled';
import { StyledButton, StyledH3 } from '../../../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../../../ui/components/Buttons/LoginBtnStyled';
import { StyledSpanLog } from '../../../../ui/components/StyledA';
import { postRegisterUser } from '../../../../api/authApi';

function SignUpForm() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().max(20, 'Email must be shorter than 20 characters').required('Recuired'),
      password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Recuired')
    }),
    onSubmit: ({ email, password }) => {
      postRegisterUser({ email: email, password: password });
    }
  })
  return (
    <StyledSection>
      <StyledContainer>
        <StyledDiv>
          <StyledH2>Sign up for your account</StyledH2>
          <StyledFormInput
            class='form-data'
            method='post'
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
              id='password'
              name='password'
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <StyledMsg>{errors.password}</StyledMsg>
            ) : null}
            <StyledButton
              type='submit'>
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
  );
};

export default SignUpForm;