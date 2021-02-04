import { Carousel, Container } from "react-bootstrap";
import home1 from "./Images/HomeCarousel/home1.JPG";
import home2 from "./Images/HomeCarousel/home2.JPG";
import home3 from "./Images/HomeCarousel/home3.JPG";
import home4 from "./Images/HomeCarousel/home4.JPG";
import home5 from "./Images/HomeCarousel/home5.jpg";
import home6 from "./Images/HomeCarousel/home6.JPG";
import home7 from "./Images/HomeCarousel/home7.JPG";
import home8 from "./Images/HomeCarousel/home8.JPG";

const HomeCarousel = () => {
  return (
    <Container>
      <Carousel style={{ borderRadius: "5px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home1}
            alt="First slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home2}
            alt="Third slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home3}
            alt="Third slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home4}
            alt="Third slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home5}
            alt="Third slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home6}
            alt="First slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home7}
            alt="First slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={home8}
            alt="First slide"
            height="500px"
            width="250px"
          />
        </Carousel.Item>
      </Carousel>
      <p></p>
    </Container>
  );
};

export default HomeCarousel;
