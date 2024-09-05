import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import AdminNavBar from '../components/AdminNavBar';
import FooterAdmin from '../components/FooterAdmin';
const AdminDashboard = () => {
  return (
    <div>
       <AdminNavBar/>   
      <Container className="mt-4">
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Add additional dashboard components or content here */}
      </Container>
      <FooterAdmin/>
    </div>
  );
};

export default AdminDashboard;
