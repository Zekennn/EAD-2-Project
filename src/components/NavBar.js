import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarStyle.css';
export default function 
() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <div>
                <span className='logoNavBarFistName'>PowerHouse</span>
                <span className='logoNavBarSecondName'>Fitness</span>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/membership" className='navBarElement' >Membership</Nav.Link>
            <Nav.Link href="/aboutUs"className='navBarElement'>About Us</Nav.Link>
            <Nav.Link href="/contactUs"className='navBarElement'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login"><div className='buttons' id='logIn'>Log In</div></Nav.Link>
            <Nav.Link href="/signUp"><div className='buttons' id='signUp'>Sign Up</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
