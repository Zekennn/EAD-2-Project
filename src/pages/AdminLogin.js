import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './adminLogin.css'; // Import the CSS file

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    localStorage.setItem('AdminEmail', email);
    window.location.href = '/admin-dashboard';
    };

  

   
  


  return (
    <div className='adminLoginBody'>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4" className="login-container">
          <h3>Administrator Login</h3>
          <Form onSubmit={handleSubmit} href="/admin-dashboard">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 ,btn-primary">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;