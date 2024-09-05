import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './aboutUs.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className='adminLoginBody'>
      <NavBar/>
    <Container className="mt-5 , about-us-container">
      <h2 className="text-center mb-4">About PowerHouseFitness</h2>
      <p className="text-center">
        Welcome to PowerHouseFitness! We are dedicated to providing you with the best fitness experience. 
        Our state-of-the-art gym is equipped with the latest machines and equipment to help you reach your fitness goals. 
        Whether you're a beginner or a seasoned athlete, we have everything you need to succeed. Join us and become a part 
        of the PowerHouse community today!
      </p>

      <Row className="mt-4">
        <Col md="4">
          <Card>
            <Card.Img variant="top" src={require('./img/06.jpg')} alt="Gym Image 1" />
            <Card.Body>
              <Card.Title>State-of-the-Art Equipment</Card.Title>
              <Card.Text>
                Our gym features the latest fitness equipment, ensuring you have everything you need for a full-body workout.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <Card.Img variant="top" src={require('./img/07.jpg')} alt="Gym Image 2" />
            <Card.Body>
              <Card.Title>Professional Trainers</Card.Title>
              <Card.Text>
                Our certified trainers are here to guide you through every step of your fitness journey, offering personalized workout plans.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <Card.Img variant="top" src={require('./img/08.jpg')} alt="Gym Image 3" />
            <Card.Body>
              <Card.Title>Community Atmosphere</Card.Title>
              <Card.Text>
                At PowerHouseFitness, we foster a supportive community where everyone encourages each other to achieve their best.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
    
  );
};

export default AboutUs;
