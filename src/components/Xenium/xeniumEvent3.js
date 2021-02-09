import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";

const xeniumEvent3 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 3;
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
        props.event3True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for 3rd Event");
  };
  let button;
  let registered = props.event3;
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
        <Row>{button}</Row>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    event3: state.event3,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event3True: () => dispatch({ type: "event3" }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(xeniumEvent3);
