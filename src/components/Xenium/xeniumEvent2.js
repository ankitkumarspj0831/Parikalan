import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";

const xeniumEvent = () => {
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          There will be a group of 10 people. A topic or a situation (case
          study) will be provided to the group, 6 or 7 mins prior discussion.
          The duration of the group discussion is 30 mins.
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <h6>Rules</h6>
            The panellists will observe each candidate on the following
            parameters:
            <br />
            1. Communication skills
            <br /> 2. Listening power
            <br /> 3. Attitude
            <br />
            4. Confidence
            <br /> 5. Way of presenting views
            <br /> 6. Interaction skills
            <br /> 7. Leadership skills
            <br />
            And then the one with the highest scores will be the winner.
            <br />
            <b>Note: </b>
            The number of groups and GDs completely depend on the number of
            participants.
            <br />
            <b>Topics:</b> Factual or adaptive
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
