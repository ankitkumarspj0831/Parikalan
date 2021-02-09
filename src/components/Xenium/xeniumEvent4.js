import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";

const xeniumEvent4 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 4;
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
        props.event4True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for 4th Event");
  };
  let button;
  let registered = props.event4;
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
        <Row>{button}</Row>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    event4: state.event4,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event4True: () => dispatch({ type: "event4" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent4);
