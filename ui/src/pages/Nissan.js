import { Carousel, CarouselItem } from "react-bootstrap";
import R34 from '../assets/R34.jpg';
import R35 from '../assets/R35.jpg';
import R32 from '../assets/R32.jpg';


export default function Nissan(){
    return(
        <div>
        <Carousel>
            <CarouselItem>
                <img
                className="d-block w-100"
                src={R34}
                alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Paul Walker</h3>
                    <p>jdm</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
            <img
                className="d-block w-100"
                src={R35}
                alt="second slide"
                />
                <Carousel.Caption>
                    <h3>1000hp</h3>
                    <p>jdm</p> 
                </Carousel.Caption>  
            </CarouselItem> 
            <CarouselItem>
                <img
                className="d-block w-100"
                src={R32}
                alt="thrid slide"
                />
                <Carousel.Caption>
                    <h3>Smokey Nagata</h3>
                    <p>jdm</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
        </div>
    )
}