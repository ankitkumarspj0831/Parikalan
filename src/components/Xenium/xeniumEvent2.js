import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event2poster from "./event2poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EventIcon from "@material-ui/icons/Event";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
    alert("Registered for Web Designing");
  };
  let button;
  let registered = props.event2;
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
            href="https://chat.whatsapp.com/G96ixbzTcn1EXEwDodJpty"
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
    button = <Button disabled>Login To Register</Button>;
  }
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          When it comes to styling and designing, HTML, CSS and JavaScript are
          your weapons.
          <br /> Get ready as we bring the opportunity to your door.
          <br /> Be the part of our tech Fest Xenium. Show your talent and grab
          exciting prizes 🤩🤩
          <p></p>
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event2poster} rounded height="auto" width="95%" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <EventIcon /> 18th February 2021
            <br />
            <ScheduleIcon /> 12:30 pm - 2:00 pm
            <h4>Rules</h4>
            1) This is a solo event.
            <br /> 2) Programming Languages: HTML, CSS and JavaScript.
            <br /> 3) There will be two rounds.
            <br />
            4) <b>Round 1: </b>
            This round will consist of 40 questions on HTML, CSS and JavaScript.
            All questions will be in the format of multiple-choice questions.
            Duration will be 20 minutes.
            <br />
            5) <b>Round 2: </b>
            In this round, shortlisted participants from Round 1 will need to
            design a single web page based on provided structure in 30 minutes
            using permitted development tools.
            <br /> 6) In Round 2, participants will be given the structure of
            the webpage.
            <br /> 7) Assessment will be done on the basis of resemblance to the
            sample output, indentation and methodology used.
            <br /> 8) Decision of the judges will be final and binding.
            <p></p>
            <h5>
              <u>Event Coordinator</u>
            </h5>
            <p>
              <b>Ankit Kumar</b> 9145823334
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
