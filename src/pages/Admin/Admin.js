import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation';
import { getAllUsers } from '../../api/adminRequests';
import AdminTable from '../../ui/containers/AdminTable/AdminTable';
import { StyledButton, StyledSection } from './AdminStyled'
 
function Admin() {
        return (
            <>
                <Navigation />
                <StyledSection>
                    <StyledButton
                        onClick={getAllUsers}
                    />
                    <AdminTable/>
                </StyledSection>
            </>
        )
    }

    export default Admin