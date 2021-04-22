import React, { useState } from 'react';
import ImageAvatars from './AvatarMaterial';
import { useFormik } from 'formik';
import { postImage } from '../../../../api//postImage';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput, StyledDivBtn, StyledContainer } from './AvatarStyled'
import { useSelector, useDispatch } from 'react-redux';
import { regUser } from '../../../../store/users';

function UploadAvatar() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const id = userInfo.id;
  const [avatarFile, setAvatarFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const imgURL = URL.createObjectURL(file);
    setAvatarFile(file);
    setImgUrl(imgURL);
  };

  const { handleSubmit } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      id: id
    },
    onSubmit: async () => {
      try {
        const formData = new FormData();
        formData.append('filedata', avatarFile);
        formData.set('id', id);
        const response = await postImage(formData);
        dispatch(regUser(response.data));
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  })

  return (
    <StyledSection>
      <ImageAvatars imgUrl={imgUrl}/>
      <StyledH1>Your Avatar</StyledH1>
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
                onChange={handleFile}
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
