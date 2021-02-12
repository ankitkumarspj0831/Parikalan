import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event3poster from "./event3poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from "@material-ui/icons/Schedule";

const xeniumEvent3 = (props) => {
  const userId = localStorage.getItem("userId");
  const eventNumber = 3;
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
        props.event3True();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
    alert("Registered for Impromptu Relay");
  };
  let button;
  let registered = props.event3;

  if (props.isLoggedIn && registered) {
    button = (
      <div>
        <Button variant="success" disabled>
          Already Registered
        </Button>
        <p></p>
        <p>
          <b>
            The registered participants will receive an email from us in few
            days, they have to confirm their presence otherwise their
            registration will be cancelled.
          </b>
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
    button = <Button disabled>Login To Register</Button>;
  }
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          <b>
            {" "}
            You can speak well if your tongue can deliver the message of your
            heart
          </b>
          <br /> Participant will be given a random topic on which he/she has to
          speak but wait, there is a twist🤔. A bell will ring in between the
          allocated time, and then the participant has to change from pros to
          the cons of the given topic.
          <br /> Those who successfully managed to do so make their way to
          amazing cash prizes. 🤩🥳
          <br />
          <b>Note: </b> The registration will be open for the first 20
          participants. So register ASAP.
          <p></p>
        </Row>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event3poster} rounded height="auto" width="95%" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <ScheduleIcon /> 2:30 pm - 4:00 pm
            <h4>Rules</h4>
            1) This is a solo event.
            <br /> 2) The event will consist of two rounds, Preliminary and
            Mains.
            <br /> 3) We have made a code that randomly selects a topic for the
            participant.
            <br /> 4) Participant will be given 1 and a half min in the prelim
            and 1 min in finals to describe the topic in your words.
            <br /> 5) Using words and phrases which hurt the sentiments of any
            religion, caste and race will not be tolerated. The participant will
            be eliminated on the spot.
            <br /> 6) As soon as the clock starts for the participant, he/she
            has to speak about the positives of the given topic, after exactly
            half time (75 seconds in prelims and 30 seconds in mains) a bell
            will ring which means now the participant has to speak about the
            negative of the topic.
            <br /> 7) The decision of judges will be final and binding.
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
    event3: state.event3,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    event3True: () => dispatch({ type: "event3" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(xeniumEvent3);
