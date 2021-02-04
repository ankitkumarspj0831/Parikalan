import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";

const xeniumEvent = () => {
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          <p>There will be two rounds for this event.</p>
          <p>
            <b>Round1: </b>
            This round will consist of 40 questions on HTML, CSS and JavaScript.
            All questions will be in the format of multiple choice questions.
            Duration for this will be 20 Minutes Max.
          </p>
          <p>
            <b>Round2: </b>
            In this round, shortlisted participants from Round 1 will need to
            design website based on any one of competition topics in 90 minutes
            using permitted development tools.
          </p>
        </Row>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <h6>Rules</h6>
            1. This is a solo event.
            <br /> 2. Programming Language HTML,CSS and JavaScript.
            <br />
            3. Students have to design a web-site on any one of the specified
            topics and present it to the judges.
            <br />
            4. Participants will be given the structure of the webpage.
            <br />
            5. Decision of the judges will be final.
            <br />
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
