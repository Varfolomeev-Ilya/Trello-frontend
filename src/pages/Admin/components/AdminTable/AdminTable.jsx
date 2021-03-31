import React from 'react';
import { useFormik } from 'formik';
import { StyledSection, StyledContainer, StyledTable, StyledPID } from './TableStyled';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../../../store/users';
import { getAllUsers } from '../../../../api/adminRequests';
import AdminPopper from '../Popoper/Popoper'

function AdminTable() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const roleId = userInfo.roleId;
  const allUsers = useSelector((state) => state.users.allUsers);
  const users = allUsers

  const { handleSubmit,
    //  handleChange, values, errors, handleBlur
  } = useFormik({
    initialValues: {
      roleId: roleId,
    },

    onSubmit: () => {
      getAllUsers()
        .then((response) => {
          // alert(JSON.stringify(response.data.allUsers));
          dispatch(setUsers(response.data.allUsers));
        })
        .catch((error) => {
          alert(error.response.data.message);
        })
    }
  })

  return (
    <StyledSection>
      <StyledContainer>
        <form
          className="form-data"
          method="POST"
          onSubmit={handleSubmit}
        >
          <button type='sybmit'>get all users</button>
        </form>
        
        {users.map(({ id, firstName, lastName, email }) =>
          <StyledTable>
            <StyledPID key={`id:${id}`}>{id}</StyledPID>
            <StyledPID key={`firstName:${firstName}`}>{firstName}</StyledPID>
            <StyledPID key={`lastName:${lastName}`}>{lastName}</StyledPID>
            <StyledPID key={`email:${email}`}>{email}</StyledPID>
            <StyledPID>
              <AdminPopper/>
            </StyledPID>
          </StyledTable>
        )}
      </StyledContainer>
    </StyledSection>
  )
}

export default AdminTable;
