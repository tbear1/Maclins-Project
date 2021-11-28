import {Carousel,} from 'react-bootstrap';
import Mk4 from '../assets/Mk4.jpg';
import PWmk4 from '../assets/PWmk4.jpg';
import SmokeyNmk4 from '../assets/SmokeyNmk4.jpg';

export default function Supras() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={Mk4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>300hp</h3>
      <p>jdm</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={PWmk4}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>RIP Paul</h3>
      <p>F&F</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SmokeyNmk4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Smokey Nagata</h3>
      <p>V12 Supra</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

