import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import personalTrainingImg from './ServicesImg/Img01.jpg'; // Path to Personal Training image
import groupFitnessImg from './ServicesImg/Img02.png'; // Path to Group Fitness Classes image
import nutritionCoachingImg from './ServicesImg/Img03.jpg'; // Path to Nutrition Coaching image
import './services.css'
export default function 
() {
  return (
    <div>
        <section className="services-section py-5">
            <Container>
                <h2 className="text-center mb-4">Our Services</h2>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="text-center">
                            <Card.Img variant="top" src={personalTrainingImg} alt="Personal Training" />
                            <Card.Body>
                                <Card.Title>Personal Training</Card.Title>
                                <Card.Text>
                                    Get one-on-one guidance from our certified personal trainers. Whether you're looking to build muscle, lose weight, or improve your fitness, our trainers will create a personalized plan just for you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="text-center">
                            <Card.Img variant="top" src={groupFitnessImg} alt="Group Fitness Classes" />
                            <Card.Body>
                                <Card.Title>Group Fitness Classes</Card.Title>
                                <Card.Text>
                                    Join our dynamic group fitness classes ranging from high-intensity interval training to yoga. Enjoy the energy of working out with others while receiving expert instruction and motivation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="text-center">
                            <Card.Img variant="top" src={nutritionCoachingImg} alt="Nutrition Coaching" />
                            <Card.Body>
                                <Card.Title>Nutrition Coaching</Card.Title>
                                <Card.Text>
                                    Complement your fitness journey with personalized nutrition coaching. Our experts will help you create a balanced diet plan that aligns with your fitness goals and lifestyle.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}
