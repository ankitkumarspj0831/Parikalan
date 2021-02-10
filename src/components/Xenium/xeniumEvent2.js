import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from '@material-ui/icons/Schedule';

const xeniumEvent2 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 2;
  const registerButton = () => {
    fetch("https://parikalanpgdav.herokuapp.com/event", {
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
        props.event2True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for 2nd Event");
  };
  let button;
  let registered = props.event2;
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
          <p>There will be a group of 10 people.</p>
          <br />
          <p>
            A topic or a situation (case study) will be provided to the group, 6
            or 7 mins prior to the discussion.
          </p>
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
          <ScheduleIcon/> 4:30 pm - 6:00 pm
            <h4>Rules</h4> 1) There will be a group of 10 people.
            <br /> 2) A topic or a situation (case study) will be provided to
            the group, 6 or 7 mins prior to the discussion.
            <br /> 3) The duration of the group discussion is 30 mins.
            <br /> 4) The panellists will observe each candidate on the
            following parameters:
            <ul>
              <li>Communication skills</li>
              <li>Listening power</li>
              <li>Attitude</li>
              <li>Confidence</li>
              <li>Way of presenting views</li>
              <li>Interaction skills</li>
              <li>Leadership skills </li>
            </ul>
            5) The one with the highest score as per the panelists , will be the
            winner.
            <p></p>
            <h5>
              <u>Event Coordinators</u>
            </h5>
            <p>
              <b>Smriti Yadav</b> 99999999
            </p>
            <p>
              <b>Yamini Sharma</b> 8750575593
            </p>
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
    event2: state.event2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event2True: () => dispatch({ type: "event2" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent2);
