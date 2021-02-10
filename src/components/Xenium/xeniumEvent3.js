import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event3poster from "./event3poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from '@material-ui/icons/Schedule';

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
            <b>Round1: </b> This round will consist of 40 questions on HTML, CSS
            and JavaScript. All questions will be in the format of
            multiple-choice questions. Duration for this will be 20 minutes.
          </p>
          <p>
            <b>Round2:</b> In this round, shortlisted participants from Round 1
            will need to design a web page based on provided structure in 30
            minutes using permitted development tools.
          </p>
          <p></p>
        </Row>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event3poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
          <ScheduleIcon/> 12:30 pm - 2:00 pm
            <h4>Rules</h4>
            1) This is a solo event.
            <br /> 2) Programming Languages: HTML, CSS and JavaScript.
            <br /> 3) Participants will be given the structure of the webpage.
            <br /> 4) Assessment will be done on the basis of resemblance to the
            sample output and cleanliness of code.
            <br /> 5) Decision of the judges will be final
            <p></p>
            <h5>
              <u>Event Coordinator</u>
            </h5>
            <p>
              <b>Ankit Kumar</b> 9145823334
            </p>
            <p>
              <b>Adya</b> 6202908726
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
    event3: state.event3,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event3True: () => dispatch({ type: "event3" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent3);
