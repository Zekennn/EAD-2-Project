import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import reviewImg1 from './ReviewImg/01.webp'; // Path to Review Image 1
import reviewImg2 from './ReviewImg/02.webp'; // Path to Review Image 2
import reviewImg3 from './ReviewImg/03.webp'; // Path to Review Image 3
import reviewImg4 from './ReviewImg/04.jpg'; // Path to Review Image 4
import reviewImg5 from './ReviewImg/05.jpg'; // Path to Review Image 5
import './reviews.css'

function Reviews() {
    const reviews = [
        {
            name: "John Doe",
            image: reviewImg1,
            text: "PowerHouseFitness has completely transformed my fitness routine. The personal trainers are fantastic and the atmosphere is incredibly motivating."
        },
        {
            name: "Jane Smith",
            image: reviewImg2,
            text: "I love the variety of group fitness classes available. It’s great to have options that keep my workouts exciting and challenging."
        },
        {
            name: "Mike Johnson",
            image: reviewImg3,
            text: "The facilities are top-notch, and the staff is always friendly and helpful. The nutrition coaching has been a game-changer for me."
        },
        {
            name: "Emily Davis",
            image: reviewImg4,
            text: "Joining PowerHouseFitness was the best decision I've made for my health. The community is supportive, and I’ve achieved great results."
        },
        {
            name: "David Brown",
            image: reviewImg5,
            text: "Highly recommend PowerHouseFitness for anyone serious about their fitness goals. The gym is clean, well-equipped, and has an amazing vibe."
        }
    ];

    return (
        <section className="reviews-section py-5">
            <Container>
                <h2 className="text-center mb-4">What Our Members Say</h2>
                <Row>
                    {reviews.map((review, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="text-center">
                                <Card.Img variant="top"  src={review.image} alt={review.name} />
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>
                                        "{review.text}"
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Reviews;