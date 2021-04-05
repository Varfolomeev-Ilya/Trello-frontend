import React from 'react';
import ImageAvatars from './AvatarMaterial';
import { useFormik } from 'formik';
import { postImage } from '../../../api/postImage';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput, StyledDivBtn, StyledContainer } from './AvatarStyled'

function UploadAvatar() {
  const { handleSubmit } = useFormik({
    onSubmit: (data) =>
      postImage(data)
  });

  return (
    <StyledSection>
      <ImageAvatars />
      <StyledH1>Upload Avatar</StyledH1>
      <StyledDiv>
        <StyledForm
          action="/upload"
          method="post"
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
                name="filedata"
              />
              <StyledInput
                value="send"
                type="submit"
              />
            </StyledDivBtn>
          </StyledContainer>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  );
};

export default UploadAvatar;
