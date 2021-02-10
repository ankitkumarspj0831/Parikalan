import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event4poster from "./event4poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from "@material-ui/icons/Schedule";

const xeniumEvent4 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 4;
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
        <Row>
          Codebots presents an ultimate Coding Competition Code Crusade. The
          competition will be on hackerank platform. Participants will solve
          three questions in the mentioned time and those who will be able to
          showcase their coding talent in the competition will make their way to
          ultimate cash prize and certificate.😎😎😎
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event4poster} rounded height="auto" width="auto" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <ScheduleIcon /> 11:00 am - 12:00 pm
            <h4>Rules</h4>
            1.) Time Allotted:  60 minutes.
            <br /> 2.) Total questions: 3 <br />
            3.) The faster with maximum score will be the winner.
            <br />
            4.) Anyone using unfair means will be disqualified. Admin
            leaderboard will be used for  result analysis.
            <br />
            5.) In case of a tie, one will be judged on test submission timing
            criteria.Decisions of the organisers will be final and binding.
            <br />
            6.) Platform: Hackerrank <br />
            7.) All the Languages available for a particular question are
            allowed for coding.
            <br /> 8.) DM in Event's WhatsApp Group for any Query or Assistance
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
