import React from 'react';
import { StyledSection, StyledContainer, StyledTable, StyledP } from './TableStyled';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../../../store/users';
import { getAllUsers } from '../../../../api/adminRequests';
import AdminPopper from '../Popoper/Popoper';
import CircularIndeterminate from '../../../../ui/components/Spinner/Spinner';
// import { DataGrid } from '@material-ui/data-grid';

function AdminTable() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.registeredUser);
  const roleId = currentUser.roleId;
  const id = currentUser.id;
  const allUsers = useSelector((state) => state.users.allUsers);
  const [isLoading, setIsLoading] = React.useState(false);

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   { field: 'email', headerName: 'email', width: 130 },
  //   { field: 'change info', headerName: 'change info', width: 200},
  // ];

  // const rows = useSelector((state) => state.users.allUsers);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getAllUsers({ roleId, id });
      dispatch(setUsers(response.data.allUsers));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <CircularIndeterminate />
        </>
      ) : (
          <>
            <StyledSection>
              <StyledContainer>
                {allUsers.map(({ id, firstName, lastName, email }) =>
                  <StyledTable>
                    <StyledP key={`id:${id}`}>{id}</StyledP>
                    <StyledP key={`firstName:${firstName}`}>{firstName}</StyledP>
                    <StyledP key={`lastName:${lastName}`}>{lastName}</StyledP>
                    <StyledP key={`email:${email}`}>{email}</StyledP>
                    <StyledP>
                      <AdminPopper id={id} />
                    </StyledP>
                  </StyledTable>
                )}
              </StyledContainer>
            </StyledSection>
            {/* <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={5} onCellClick={handleClick}/>
            </div> */}
          </>
        )}
    </>
  )
}

export default AdminTable;
