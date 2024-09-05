import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './login.css'; // Import the CSS file
import NavBar from '../components/NavBar';
import { useHistory } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Save the username or other user details if needed
        localStorage.setItem('username', response.data.firstName); // or any other identifier

        // Redirect to the home page and refresh
        history.push('/');
        window.location.reload();
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  return (
    <div className='loginBody'>
    <NavBar/>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4" className="login-container">
          <h3>Login</h3>
          <Form onSubmit={handleSubmit}>
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