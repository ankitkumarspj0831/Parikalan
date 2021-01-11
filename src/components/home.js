import {
  Container,
  Jumbotron,
  Carousel,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import iPhone12 from "../iphone12.jpg";

const home = (props) => {
  console.log(props.location);
  return (
    <Container fluid>
      {" "}
      <Jumbotron fluid>
        <h1>
          Parikalan <h2>The Computer Science Society of PGDAV College</h2>
        </h1>
        <p>Introduction about the Parikalan</p>
      </Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iPhone12}
            alt="First slide"
            height="200px"
            width="400px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iPhone12}
            alt="Third slide"
            height="200px"
            width="400px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={iPhone12}
            alt="Third slide"
            height="200px"
            width="400px"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p></p>
      <Jumbotron>
        <Row>
          <Col xs={12} md={4}>
            <Image src={iPhone12} roundedCircle />
            <p></p>
            <p>Dr. Ravish Sharma</p>
          </Col>
          <Col xs={12} md={8}>
            <h3>
              <u>Message from Teacher-Incharge</u>
            </h3>
            Message from the teacher incharge. Message from the teacher
            incharge. Message from the teacher incharge.Message from the teacher
            incharge.Message from the teacher incharge.Message from the teacher
            incharge.Message from the teacher incharge.Message from the teacher
            incharge.Message from the teacher incharge.Message from the teacher
            incharge.Message from the teacher incharge.Message from the teacher
            incharge.Message from the teacher incharge.
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron style={{ backgroundColor: "lightblue" }}>
        <h1>Send us your queries.</h1>
        <Form style={{ width: "75%", margin: "auto" }}>
          <Row>
            <Col xs={6} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
            <Col xs={6} md={6}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your queries.</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

export default home;
