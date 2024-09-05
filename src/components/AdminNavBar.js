import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './AdminNavBar.css'

const adminEmail = localStorage.getItem('AdminEmail');
export default function () {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#"><div>
                <span className='logoAdminNavBarFistName'>PowerHouse</span>
                <span className='logoAdminNavBarSecondName'>Fitness</span>
            </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Membership Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin-dashboard-addMembership">Add Membership</NavDropdown.Item>
                <NavDropdown.Item href="/admin-dashboard-membershipList">Membership List</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="User Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin-dashboard-userList">User List</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Trainer Management" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin-dashboard-addTrainer">Add Trainer</NavDropdown.Item>
                <NavDropdown.Item href="/admin-dashboard-trainerList">Trainer List</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                Logged in as: 
                <div className='adminEmail' >
                 {adminEmail}
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
