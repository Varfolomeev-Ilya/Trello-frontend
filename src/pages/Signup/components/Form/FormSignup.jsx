import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FollowLinkIn from '../Link/LinkIn';
import { StyledSection, StyledContainer, StyledInput, StyledDiv, StyledH2, StyledFormInput, StyledSpanLog } from './FormSignupStyled';
import { StyledMsg } from '../../../../ui/components/Message/MessageStyled';
import { StyledButton, StyledH3 } from '../../../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../../../ui/components/Buttons/LoginBtnStyled';
import { postRegisterUser } from '../../../../api/authApi';
import { useDispatch } from 'react-redux';
import { regUser } from '../../../../store/users';
import * as validation from '../../../../utils/validationConsts'

function SignUpForm() {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    },
    validationSchema: Yup.object({
      email:
        Yup
          .string()
          .email()
          .trim()
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
      firstName:
        Yup
          .string()
          .trim()
          .min(validation.FIRSTNAME_LENGTH, validation.FIRSTNAME_LENGTH_MESSAGE)
          .required(validation.FIRSTNAME_REQUIRED_MESSAGE)
          .matches(validation.FIRSTNAME_MATCHES, validation.FIRSTNAME_MATCHES_MESSAGE),
      lastName:
        Yup
          .string()
          .trim()
          .min(validation.LASTNAME_LENGTH, validation.LASTNAME_LENGTH_MESSAGE)
          .required(validation.LASTNAME_REQUIRED_MESSAGE)
          .matches(validation.LASTNAME_MATCHES, validation.LASTNAME_MATCHES_MESSAGE),
    }),
    onSubmit: async ({ email, password, firstName, lastName }) => {
      try {
        const response = await postRegisterUser({ email: email, password: password, firstName: firstName, lastName: lastName });
        alert(JSON.stringify(response.data.message))
        localStorage.setItem('isAuthenticated', JSON.stringify(response.data.tokens.accessToken));
        dispatch(regUser(response.data.user))
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  })

  return (
    <StyledSection>
      <StyledContainer>
        <StyledDiv>
          <StyledH2>Sign up for your account</StyledH2>
          <StyledFormInput
            className='form-data'
            method='post'
            onSubmit={handleSubmit}
          >
            <StyledInput
              type='email'
              id='email'
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
              id='password'
              name='password'
              placeholder='Enter password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password ? (
              <StyledMsg>{errors.password}</StyledMsg>
            ) : null}
            <StyledInput
              type='firstName'
              id='firstName'
              name='firstName'
              placeholder='firstName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName ? (
              <StyledMsg>{errors.firstName}</StyledMsg>
            ) : null}
            <StyledInput
              type='lastName'
              id='lastName'
              name='lastName'
              placeholder='lastName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName ? (
              <StyledMsg>{errors.lastName}</StyledMsg>
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