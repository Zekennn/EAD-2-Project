import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


// Importing images
import FirstSlide from './CarouselImage/Firstslide.jpg';
import SecondSlide from './CarouselImage/Secondslide.jpg';
import ThirdSlide from './CarouselImage/Thirdslide.jpg';

export default function () {
  return (
    <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={FirstSlide}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Unleash Your Potential</h3>
                    <p>Every step forward is a step towards a stronger, healthier you. Embrace the challenge, push past your limits, and discover the power within. Your potential is limitless, and with every workout, you're one step closer to becoming the best version of yourself. The journey is tough, but so are you.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={SecondSlide}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Strive for Progress</h3>
                    <p>In the gym, progress isn't just measured in pounds or reps; it's the small victories that count. Each day you show up, you're stronger than the last. Strive for progress, not perfection, and celebrate every achievement, no matter how small. Keep moving forward; your success story is being written.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ThirdSlide}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Commit to Fit</h3>
                    <p>Fitness is not a destination, it's a journey. Commit to showing up, putting in the effort, and staying focused on your goals. Every drop of sweat brings you closer to the body and mind you’ve always wanted. Stay dedicated, stay strong, and remember why you started.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  )
}
