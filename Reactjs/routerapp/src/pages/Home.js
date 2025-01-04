import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from './images/c1.jpeg';

import c2 from './images/c2.jpeg';

import c3 from './images/c3.jpeg';

import './Home.css';
const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide Label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Slide Label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1>Welcome</h1>
        </div>
    );
};

export default Home;