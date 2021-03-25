import React from 'react';
import {
  StyledSection, StyledH1, StyledP, StyledH3,
  StyledHr, StyledDiv, StyledForm, StyledDivUser,
  StyledSpanUser, StyledDivSpan, StyledSpan,
  StyledSpanP, StyledDivInput, StyledInput,
  StyledDivBio, StyledTextarea, StyledButton
} from './ProfileStyled.js';

function Profile() {
  return (
    <StyledSection>
      <StyledH1>Manage your personal information</StyledH1>
      <StyledP>This is an Atlassian account. Edit your personal information and visibility settings through your </StyledP>
      <StyledH3>About</StyledH3>
      <StyledHr />
      <StyledDiv>
        <StyledForm class="form-data" method="POST">
          <StyledDivUser>
            <StyledSpanUser>Username</StyledSpanUser>
            <StyledDivSpan>
              <StyledSpan>
                <StyledSpan>
                </StyledSpan>
              </StyledSpan>
              <StyledSpanP>Always public</StyledSpanP>
            </StyledDivSpan>
          </StyledDivUser>
          <StyledDivInput>
            <StyledInput type="text" name="username" autocomplete="username" />
          </StyledDivInput>
          <StyledDivInput>
          <StyledSpanUser>Firstname</StyledSpanUser>
            <StyledInput type="text" name="FirstName" autocomplete="FirstName" />
          </StyledDivInput>
          <StyledDivInput>
          <StyledSpanUser>Lastname</StyledSpanUser>
            <StyledInput type="text" name="LastName" autocomplete="LastName" />
          </StyledDivInput>
          <StyledDivBio>
            <StyledSpan>Bio</StyledSpan>
            <StyledDivSpan>
              <StyledSpan>
                <StyledSpan>

                </StyledSpan>
              </StyledSpan>
              <StyledSpanP>Always public</StyledSpanP>
            </StyledDivSpan>
          </StyledDivBio>
          <StyledTextarea></StyledTextarea>
          <StyledButton type="submit">Save</StyledButton>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  )
}

export default Profile;