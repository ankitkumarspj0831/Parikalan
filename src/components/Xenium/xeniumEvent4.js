import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";

const xeniumEvent = () => {
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>Event Description</Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <h6>Rules</h6>
            1. It will be a individual Event
            <br /> 2. It will have 3 Questions Difficulty 2 Medium 1 Hard
            <br /> 3. Any type of Plagiarism or unfair means will lead to
            disqualification
            <br /> 4. Desicion of the Organising team will be final
            <br /> 5. Duration 1 hr
          </Col>
        </Row>
        <p></p>
        <Row>
          <Button variant="primary">Register</Button>{" "}
          <Button variant="success" disabled>
            Already Registered
          </Button>{" "}
          <Button variant="warning">Login First</Button>{" "}
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default xeniumEvent;
