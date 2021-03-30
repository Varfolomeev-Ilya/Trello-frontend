import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation';
// import { getAllUsers } from '../../api/adminRequests';
import AdminTable from './components/AdminTable/AdminTable';

function Admin() {
  return ( 
    <> 
      <Navigation />
      <AdminTable />
    </>  
        )
    }

export default Admin;