import React from 'react';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput } from './AvatarStyled'

function UploadAvatar() {

  return (
    <StyledSection>
      <StyledH1>Upload Avatar</StyledH1>
      <StyledDiv>
        <StyledForm action="/account" method="POST" enctype="multipart/form-data">
          <StyledLabel>
            <StyledH3>File</StyledH3>
            <StyledHr />
          </StyledLabel>
          <StyledInput
          type="file"
          name="filedata" />
          <br/>
          <StyledInput type="submit" value="send"/>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  );
};

export default UploadAvatar;
