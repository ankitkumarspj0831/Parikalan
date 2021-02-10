import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from "@material-ui/icons/Schedule";

const xeniumEvent1 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 1;
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
          <i>
            You can speak well if your tongue can deliver the message of your
            heart
          </i>
          <br />
          Participants will be given a topic on which he/she has to speak but
          wait there is a twist🤔 a bell will ring in between the time and then
          the participant has to change from the positive to the negative of the
          given topic. Those who successfully managed to do so make their way to
          amazing cash prizes.🤩🥳
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <ScheduleIcon /> 2:30 pm - 4:00 pm
            <h4>Rules</h4>
            1) This is a solo event.
            <br /> 2) We made a code which randomly selects topic for the
            participant.
            <br /> 3) You will be given 1 and a half min in prelim and 1 min in
            finals to describe the topic in your words.
            <br /> 4) Using words and phrases which hurt the sentiments of any
            religion, caste and race will not be tolerated. The participant will
            be eliminated on the spot.
            <br /> 5) During the given time, A bell will ring once which means
            that its time to change your perspective from negative to positive
            or vice versa regarding the given topic.
            <br /> 6) The final decision will be taken by the judges and no
            further questions will be entertained.
            <br />
            <p></p>
            <h5>
              <u>Event Coordinators</u>
            </h5>
            <p>
              <b>Himanshu Tiwari</b> 9625671314
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
    event1: state.event1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event1True: () => dispatch({ type: "event1" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent1);
