import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";

const xeniumEvent1 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 1;
  const registerButton = () => {
    fetch("http://localhost:8000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        eventNumber: eventNumber,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log("Success");
        console.log(resData);
        props.event1True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for 1st Event");
  };
  let button;
  let registered = props.event1;
  if (props.isLoggedIn && registered) {
    button = (
      <Button variant="success" disabled>
        Already Registered
      </Button>
    );
  } else if (props.isLoggedIn) {
    button = (
      <Button variant="primary" onClick={registerButton}>
        Register
      </Button>
    );
  } else {
    button = <Button disabled>Login To Register</Button>;
  }

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
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
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
        <Row>{button}</Row>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    event1: state.event1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event1True: () => dispatch({ type: "event1" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent1);
