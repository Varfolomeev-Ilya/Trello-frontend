import React from 'react';
import {
  StyledSection, StyledH1, StyledP, StyledH3,
  StyledHr, StyledDiv, StyledForm, StyledDivUser,
  StyledSpanUser, StyledDivSpan, StyledSpan,
  StyledSpanP, StyledDivInput, StyledInput,
  StyledDivBio, StyledButton
} from './ProfileStyled.js';
import { postInfoUser } from '../../../api/usersRequests';
import { useFormik } from 'formik';

function Profile() {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      aboutMe: ''
    },
    onSubmit: ({ firstName, lastName, aboutMe }) => {
      postInfoUser({ firstName: firstName, lastName: lastName, aboutMe: aboutMe })
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
          class="form-data"
          method="POST"
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
            {/* <StyledInput type="text" name="username" autocomplete="username" /> */}
          </StyledDivInput>
          <StyledDivInput>
            <StyledSpanUser>Firstname</StyledSpanUser>
            <StyledInput
              type="text"
              name="firstName"
              autocomplete="FirstName"
              onChange={handleChange}
              value={values.firstName}
            />
          </StyledDivInput>
          <StyledDivInput>
            <StyledSpanUser>Lastname</StyledSpanUser>
            <StyledInput type="text"
              name="lastName"
              autocomplete="LastName"
              onChange={handleChange}
              value={values.lastName}
            />
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
            type="text"
            name="aboutMe"
            onChange={handleChange}
            value={values.aboutMe}
          />
          {/* <StyledTextarea ></StyledTextarea> */}
          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  )
}

export default Profile;