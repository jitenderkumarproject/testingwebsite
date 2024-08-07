import React from 'react'
import { Carousel } from 'react-bootstrap';
import './CSS/caraousal.scss'

function Caraousel() {
    return (
        <Carousel className='carousel'>
            <Carousel.Item>
                <h5>First slide label</h5>
                <img
                    width="auto"
                    height="auto"
                    className="d-block w-100"
                    src="assests/CarouselImage/1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h5>First slide label</h5>
                <img
                   width="auto"
                    height="auto"
                    className="d-block w-100"
                    src="assests/CarouselImage/2.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <h5>First slide label</h5>
                <img
                    width="auto"
                    height="auto"
                    className="d-block w-100"
                    src="assests/CarouselImage/3.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default Caraousel
