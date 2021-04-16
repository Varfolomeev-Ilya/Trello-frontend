import React from 'react';
import { StyledSection, StyledContainer, StyledTable, StyledP } from './TableStyled';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../../../store/users';
import { getAllUsers } from '../../../../api/adminRequests';
import AdminPopper from '../Popoper/Popoper';
import CircularIndeterminate from '../../../../ui/components/Spinner/Spinner';

function AdminTable() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.registeredUser);
  const roleId = currentUser.roleId;
  const allUsers = useSelector((state) => state.users.allUsers);
  const [isLoading, setIsLoading] = React.useState(false);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getAllUsers({roleId});
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
        </>
      )}
    </>
  )
}

export default AdminTable;
