import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useFormik } from 'formik';
import { StyledSection, StyledContainer, StyledForm } from './TableStyled';
import { getAllUsers } from '../../../../api/adminRequests'
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../../../store/users'

function AdminTable() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.registeredUser);
  const roleId = userInfo.roleId;
  const allUsers = useSelector((state) => state.users.allUsers);

  const { handleSubmit,
    //  handleChange, values, errors, handleBlur
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      roleId: JSON.parse(roleId)
    },

    onSubmit: ({ email, password, firstName, lastName, roleId }) => {
      getAllUsers({ email: email, password: password, firstName: firstName, lastName: lastName, roleId: roleId })
        .then((response) => {
          alert(JSON.stringify(response.data.allUsers));
          dispatch(setUsers(response.data.allUsers));

          const oneUser = allUsers.map(({ firstName, lastName, email, aboutMe }) =>
            ` firstName : ${firstName}, lastName : ${lastName}, email : ${email}, aboutMe : ${aboutMe}`);
          for (let id in oneUser) {
            if (oneUser.hasOwnProperty(id)) {
              console.log(`${id} : ${oneUser[id]}`)
            };
          };
        })

        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  })

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'aboutMe', headerName: 'AboutMe', width: 130 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const rows = [
     {id : '1'}
  ];
  return (
    <StyledSection>
      <StyledContainer>
        <StyledForm class='form-data'
          method='post'
          onSubmit={handleSubmit}>
          <button type='submit'>get all users</button>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </StyledForm>
      </StyledContainer>
    </StyledSection>
  )
}

export default AdminTable;