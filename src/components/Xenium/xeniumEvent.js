import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const xeniumEvent = () => {
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          The event will be type of xtempor in which we will give a topic to
          participant(The randomly generated topic with the help of a
          program)(topics will be interesting so that no one gets bored) and
          he/she has to talk about the topic the twist is this that the person
          has to start with the positives of topic but in between we will ring a
          bell and the participant has to shift to the negative of that topic if
          participant is able to speak there will be points otherwise no point
          will be given. Decision of judges will be final.
        </Row>
        <Row>
          <Col xs={12} md={6}>Event Poster</Col>
          <Col style={{textAlign: "left"}} xs={12} md={6}>
            <h6>Rules</h6>
            1.This is a solo event.
            <br /> 2. We made a code which randomly selects topic for the
            participant.
            <br /> 3. You will be given 2 min to describe the topic in your
            words.
            <br /> 4. Using words and phrases which hurt the sentiments of any
            religion, caste and race will not be tolerated. The participant will
            be eliminated on the spot.
            <br /> 5. During the given time, A bell will ring once which means
            that its time to change your perspective from negative to positive
            or vice versa regarding the given topic.
            <br /> 6. The final decision will be taken by the judges and no
            further questions will be entertained
          </Col>
        </Row>
        <p></p>
        <Row>
          <Button variant="primary">Register</Button>{" "}
          <Button variant="success" disabled>Already Registered</Button>{" "}
          <Button variant="warning">Login First</Button>{" "}
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default xeniumEvent;
