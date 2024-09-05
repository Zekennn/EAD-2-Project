import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contactUs.css'; // Optional: for custom styles
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className='contactUsBody'>
       <NavBar/>
    <Container className="mt-5 , contact-us-container">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h3 className="text-center">Contact Us</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md="6">
          <h3 className="text-center">Contact Information</h3>
          <p><strong>Email:</strong> info@powerhousefitness.com</p>
          <p><strong>Phone:</strong> +1 555 123-4567</p>
          <p><strong>Phone:</strong> +1 555 987-6543</p>
          <p><strong>Address:</strong> 123 Fitness St, PowerHouse City, Fitland, 12345</p>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
};

export default ContactUs;
