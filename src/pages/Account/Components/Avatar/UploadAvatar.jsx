import React, { useState } from 'react';
import ImageAvatars from './AvatarMaterial';
import { useFormik } from 'formik';
import { postImage } from '../../../../api//postImage';
import { StyledSection, StyledH1, StyledForm, StyledLabel, StyledHr, StyledDiv, StyledH3, StyledInput, StyledDivBtn, StyledContainer } from './AvatarStyled'
import { useSelector, useDispatch } from 'react-redux';
import { regUser } from '../../../../store/users'

function UploadAvatar(localImageUrl) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const id = userInfo.id;
  const [avatarFile, setAvatarFile] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    // const localImageUrl = URL.createObjectURL(file);
    // const url = localImageUrl.substr(5);
    // localStorage.setItem('avataURL', url);
    // console.log(url)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result)
    }
    setAvatarFile(file);
  };
  const { handleSubmit } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      id: id
    },
    onSubmit: async () => {
      try {
        const formData = new FormData();
        formData.append('filedata', avatarFile);
        formData.set('id', id);
        const response = await postImage(formData);
        dispatch(regUser(response.data))
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  })
  // const url = localStorage.getItem('avataURL');
  // console.log(url)
  return (
    <StyledSection>
      {/* <ImageAvatars /> */}
      <div>
          <img src='' alt='avatar'></img>
      </div>
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
                onChange={(e) => handleFile(e)}
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
