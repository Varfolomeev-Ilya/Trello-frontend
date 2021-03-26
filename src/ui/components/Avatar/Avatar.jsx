import React from 'react';
import ImageAvatars from './AvatarMaterial';
import { postImage } from '../../../api/postImage';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput, StyledDivBtn, StyledContainer } from './AvatarStyled'

function UploadAvatar() {
  const handleSubmit = () => {
    postImage()
  }
  return (
    <StyledSection>
      <ImageAvatars/>
      <StyledH1>Upload Avatar</StyledH1>
      <StyledDiv>
        <StyledForm
         action="/account"
          method="POST"
           enctype="multipart/form-data"
           onSubmit={handleSubmit}
           >
          <StyledLabel>
            <StyledH3>File</StyledH3>
            <StyledHr />
          </StyledLabel>
          <StyledContainer>
            <StyledDivBtn>
              <StyledInput
                type="file"
                name="filedata" />
              <StyledInput
                type="submit"
                value="send"/>
            </StyledDivBtn>
          </StyledContainer>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  );
};

export default UploadAvatar;
