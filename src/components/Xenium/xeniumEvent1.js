import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event1poster from "./event1poster.jpg";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EventIcon from "@material-ui/icons/Event";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
        console.log(resData);
        props.event1True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for Code Crusade");
  };
  let button;
  let registered = props.event1;

  if (props.isLoggedIn && registered) {
    button = (
      <div>
        <Button variant="success" disabled>
          Already Registered
        </Button>
        <p></p>
        <p>
          Join the <WhatsAppIcon />
          <a
            href="https://chat.whatsapp.com/I2rMclHlwPI0xgyRljpwb3"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Group
          </a>
        </p>
      </div>
    );
  } else if (props.isLoggedIn) {
    button = (
      <Button variant="primary" onClick={registerButton}>
        Register
      </Button>
    );
  } else {
    button = (
      <div>
        <NavLink to="/auth/signup">
          <Button>Login To Register</Button>
        </NavLink>
        <br />
        <b>Join the whatsapp group(available after registration)</b>
      </div>
    );
  }
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          Parikalan brings the challenge of Codecrusade as a test of your coding
          skills.
          <br /> You must use the code building weapons of different programming
          languages like C++, python or java etc.
          <br /> Be ready for the showdown. Come as a ‘lone coder’ and circle
          your wagons. Load up supplies ,train your brain and get ready for a
          code crusading good time.
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event1poster} rounded height="auto" width="95%" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <EventIcon /> 18th February 2021
            <br />
            <ScheduleIcon /> 11:00 am - 12:00 pm
            <h4>Rules</h4>
            1) It is a solo event.
            <br />
            2) Platform: Hackerrank
            <br />
            3) Time Allotted: 60 minutes.
            <br />
            4) Total questions: 3<br />
            5) The participant with maximum score in minimum time will be the
            winner.
            <br />
            6) Admin leaderboard will be used for result analysis.
            <br />
            7) In case of a tie, one will be judged on test submission timing
            criteria. In case if time of two or more participants is also equal,
            then prize will be shared between them.
            <br />
            8) Anyone using unfair means will be disqualified.
            <br />
            9) Decisions of the judges will be final and binding.
            <br />
            10) All the languages available for a given question on Hackerrank
            are allowed for coding the solution of that question.
            <p></p>
            <h5>
              <u>Event Coordinators</u>
            </h5>
            <p>
              <b>Arpit Samadhiya</b> 6398921252
            </p>
            <p>
              <b>Yamini Sharma</b> 8750575593
            </p>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Button variant="warning" disabled>
            Registration Closed
          </Button>
        </Row>
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
