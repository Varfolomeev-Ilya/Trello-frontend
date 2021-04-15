import React from 'react';
import {
  StyledSection, StyledH1, StyledP, StyledH3,
  StyledHr, StyledDiv, StyledForm, StyledDivUser,
  StyledSpanUser, StyledDivSpan, StyledSpan,
  StyledSpanP, StyledDivInput, StyledInput,
  StyledDivBio, StyledButton
} from './ProfileStyled.js';
import { StyledMsg } from '../../../../ui/components/Message/MessageStyled'
import { postInfoUser } from '../../../../api/usersRequests';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import * as validation from '../../../../utils/validationConsts';
import { regUser } from '../../../../store/users';

function Profile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const firstaName = userInfo.firstName;
  const lastaName = userInfo.lastName;
  const aboutMe = userInfo.aboutMe;
  const email = userInfo.email;
  const id = userInfo.id;

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
    initialValues: {
      firstName: firstaName,
      lastName: lastaName,
      aboutMe: aboutMe,
      email: email,
      id: id
    },
    validationSchema: Yup.object({
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
      aboutMe:
        Yup
          .string()
          .trim()
          .min(validation.ABOUTME_MIN_LENGTH, validation.ABOUTME_LENGTH_MESSAGE)
          .max(validation.ABOUTME_MAX_LENGTH, validation.ABOUTME_LENGTH_MESSAGE)
          .required(validation.ABOUTME_REQUIRED_MESSAGE)
          .matches(validation.ABOUTME_MATCHES, validation.ABOUTME_MATCHES_MESSAGE),
    }),
    onSubmit: async ({ firstName, lastName, aboutMe, email, id }) => {
      try {
        const response = await postInfoUser({
          firstName: firstName, lastName: lastName, aboutMe: aboutMe, email: email, id: id
        });
        dispatch(regUser(response.data))
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  })

  return (
    <StyledSection>
      <StyledH1>Manage your personal information</StyledH1>
      <StyledP>This is an Atlassian account. Edit your personal information and visibility settings through your </StyledP>
      <StyledH3>About</StyledH3>
      <StyledHr />
      <StyledDiv>
        <StyledForm
          className='form-data'
          method='post'
          onSubmit={handleSubmit}>
          <StyledDivUser>
            <StyledDivSpan>
              <StyledSpan>
                <StyledSpan>
                </StyledSpan>
              </StyledSpan>
              <StyledSpanP>Always public</StyledSpanP>
            </StyledDivSpan>
          </StyledDivUser>
          <StyledDivInput>
          </StyledDivInput>
          <StyledDivInput>
            <StyledSpanUser>Firstname</StyledSpanUser>
            <StyledInput
              id='firstname'
              type='firstName'
              name='firstName'
              autocomplete='firstName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {touched.firstName && errors.firstName ? (
              <StyledMsg>{errors.firstName}</StyledMsg>
            ) : null}
          </StyledDivInput>
          <StyledDivInput>
            <StyledSpanUser>Lastname</StyledSpanUser>
            <StyledInput
              id='lasttname'
              type='lastName'
              name='lastName'
              autocomplete='lastName'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName ? (
              <StyledMsg>{errors.lastName}</StyledMsg>
            ) : null}
          </StyledDivInput>
          <StyledDivBio>
            <StyledSpanUser>aboutMe</StyledSpanUser>
            <StyledDivSpan>
              <StyledSpan>
                <StyledSpan>
                </StyledSpan>
              </StyledSpan>
              <StyledSpanP>Always public</StyledSpanP>
            </StyledDivSpan>
          </StyledDivBio>
          <StyledInput
            id='aboutMe'
            type='aboutMe'
            name='aboutMe'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aboutMe}
          />
          {touched.aboutMe && errors.aboutMe ? (
            <StyledMsg>{errors.aboutMe}</StyledMsg>
          ) : null}
          <StyledButton type='submit'>Save</StyledButton>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  )
}

export default Profile;