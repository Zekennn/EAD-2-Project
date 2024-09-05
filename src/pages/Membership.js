import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './membership.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const membershipData = [
  {
    name: 'Basic Membership',
    types: 'Monthly, Yearly',
    pricing: '$30/month or $300/year',
    facilities: 'Access to gym equipment, locker room',
    services: '1 free personal training session',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  {
    name: 'Standard Membership',
    types: 'Monthly, Yearly',
    pricing: '$50/month or $500/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes',
    services: '3 free personal training sessions, nutrition consultation',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  {
    name: 'Premium Membership',
    types: 'Monthly, Yearly',
    pricing: '$70/month or $700/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes, pool',
    services: '5 free personal training sessions, nutrition consultation, free merchandise',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  {
    name: 'Family Membership',
    types: 'Monthly, Yearly',
    pricing: '$120/month or $1200/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes, pool, family lounge',
    services: '10 free personal training sessions, family nutrition consultation',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  {
    name: 'VIP Membership',
    types: 'Monthly, Yearly',
    pricing: '$150/month or $1500/year',
    facilities: 'All-access pass, VIP locker room, private pool area, spa services',
    services: 'Unlimited personal training, private nutrition consultation, exclusive events',
    cancellation: 'Cancel anytime with 30 days notice',
  },
];

const Membership = () => {
  return (
    <div className='membershipBody' >
        <NavBar/>
        <Container className="mt-5 ">
      <h2 className="text-center mb-4 ">Membership Options</h2>
      <Row>
        {membershipData.map((membership, index) => (
          <Col md="4" key={index} className="mb-4">
            <Card className="membership-card">
              <Card.Body>
                <Card.Title>{membership.name}</Card.Title>
                <Card.Text>
                  <strong>Types of Memberships:</strong> {membership.types}
                </Card.Text>
                <Card.Text>
                  <strong>Pricing:</strong> {membership.pricing}
                </Card.Text>
                <Card.Text>
                  <strong>Facilities and Services:</strong> {membership.facilities}
                </Card.Text>
                <Card.Text>
                  <strong>Services:</strong> {membership.services}
                </Card.Text>
                <Card.Text>
                  <strong>Cancellation Policies:</strong> {membership.cancellation}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </div>
  );
};

export default Membership;
