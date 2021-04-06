import React from 'react';
import ImageAvatars from './AvatarMaterial';
import { useFormik } from 'formik';
import { postImage } from '../../../../api//postImage';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput, StyledDivBtn, StyledContainer } from './AvatarStyled'

function UploadAvatar() {
  const { handleSubmit } = useFormik({
    onSubmit: async () => {
      try {
        const formData = new FormData();
        const file = document.querySelector('#file');
        formData.append('filedata', file.files[0]);
        const response = await postImage(formData)
        alert(response)
      } catch (error) {
        alert(error)
      }
    }
  });

  return (
    <StyledSection>
      <ImageAvatars />
      <StyledH1>Upload Avatar</StyledH1>
      <StyledDiv>
        <StyledForm
          method='post'
          enctype='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <StyledLabel>
            <StyledH3>File</StyledH3>
            <StyledHr />
          </StyledLabel>
          <StyledContainer>
            <StyledDivBtn>
              <StyledInput
                type='file'
                name='files'
                multiple=''
              />
              <StyledInput
                type='submit'
              />
            </StyledDivBtn>
          </StyledContainer>
        </StyledForm>
      </StyledDiv>
    </StyledSection>
  );
};

export default UploadAvatar;
