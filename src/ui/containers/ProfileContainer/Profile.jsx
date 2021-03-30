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
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';


function Profile() {
  // const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const firstaName = userInfo.firstName;
  const lastaName = userInfo.lastName;
  const aboutMe = userInfo.aboutMe;
  const email = userInfo.email;

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      firstName: firstaName,
      lastName: lastaName,
      aboutMe: aboutMe,
      email: email,
    },
    onSubmit: ({ firstName, lastName, aboutMe, email }) => {
      postInfoUser({
        firstName: firstName, lastName: lastName, aboutMe: aboutMe, email: email
      })
        .then((response) => {
          alert(JSON.stringify(response))
        })
        .catch((error) => {
          alert(error.message)
        })
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
              value={values.firstName} />
          </StyledDivInput>
          <StyledDivInput>
            <StyledSpanUser>Lastname</StyledSpanUser>
            <StyledInput type="text"
              name="lastName"
              autocomplete="LastName"
              onChange={handleChange}
              value={values.lastName} />
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
            value={values.aboutMe} />
          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  )
}

export default Profile;