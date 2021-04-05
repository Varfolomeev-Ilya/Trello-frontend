import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FollowLinkIn from '../LinkIn';
import { StyledSection, StyledContainer, StyledInput, StyledDiv, StyledH2, StyledFormInput, StyledMsg } from './FormSignupStyled';
import { StyledButton, StyledH3 } from '../../../../ui/components/Buttons/ButtonStyled';
import { StyledLoginButton, StyledSpan } from '../../../../ui/components/Buttons/LoginBtnStyled';
import { StyledSpanLog } from '../../../../ui/components/StyledA';
import { postRegisterUser } from '../../../../api/authApi';
import { useDispatch } from 'react-redux';
import { regUser } from '../../../../store/users';
import { setAuthUser } from '../../../../store/auth'

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
      email: Yup.string().max(20, 'Email must be shorter than 20 characters').required('Recuired'),
      password: Yup.string().min(8, 'Password should be longer than 8 characters').required('Recuired'),
      firstName: Yup.string().min(3, 'FirstName should be longer than 3 characters').required('Recuired'),
      lastName: Yup.string().min(3, 'LastName should be longer than 4 characters').required('Recuired'),
    }),
    onSubmit: ({ email, password, firstName, lastName }) => {
      postRegisterUser({ email: email, password: password, firstName: firstName, lastName: lastName })
        .then((response) => {
          alert(response.data.message)
          dispatch(regUser(response.data.user))
          if(response.status === 201) {
            dispatch(setAuthUser(true));
          }
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
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
            <StyledInput
              type='lastName'
              id='lastName'
              name='lastName'
              placeholder='lastName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
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