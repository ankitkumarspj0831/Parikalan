import { Container, Row, Col, Jumbotron, Button, Image } from "react-bootstrap";
import event4poster from "./event4poster.jpg";
import { connect } from "react-redux";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { NavLink } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EventIcon from "@material-ui/icons/Event";

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
    alert("Registered for Group Discussion");
  };
  let button;
  let registered = props.event4;

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
            href="https://chat.whatsapp.com/KJKvsQ49gvF6LkgHWz7LX4"
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
      <NavLink to="/auth/signup">
        <Button>Login To Register</Button>
      </NavLink>
    );
  }
  return (
    <Container>
      <p></p>
      <Jumbotron>
        <Row>
          Have a knack for clicking pictures of situations from your viewpoint
          camera?
          <br /> 🤓Have a different say on that headline?
          <br />
          📰 We got you covered!💥💥
          <br /> Xenium brings you an amazing event - Group Discussion because
          we believe that its a healthy clash of viewpoints that makes us
          wiser.🤩🤩 <br />
          Mark the date and do join us for sharing your views or just to gain
          some knowledge!✨✨
        </Row>
        <p></p>
        <Row>
          {/* Size of the image is of pixel 300 x 300px */}
          <Col xs={12} md={4}>
            {" "}
            <Image src={event4poster} rounded height="auto" width="95%" />
          </Col>
          <Col style={{ textAlign: "left" }} xs={12} md={8}>
            <EventIcon /> 18th February 2021
            <br />
            <ScheduleIcon /> 4:30 pm - 6:00 pm
            <h4>Rules</h4>
            1.) There will be a group of 7 people.
            <br /> 2.) A topic or a situation (case study) will be provided to
            the group, five minutes before to the discussion.
            <br /> 3.) The duration of the group discussion is 30 mins.
            <br /> 4.) The panellists will observe each candidate on the
            following parameters:
            <ul>
              <li>Communication skills</li>
              <li>Listening power</li>
              <li>Attitude</li>
              <li>Confidence</li>
              <li>Way of presenting views</li>
              <li>Interaction skills</li>
              <li>Leadership skills</li>
            </ul>
            5.) The one with the highest score as per the panellists, will be
            the winner.
            <br />{" "}
            <b>
              Note: The size and number of groups and the duration of the Group
              Discussions completely depend on the number of participants and is
              on the discretion of the organizers.
            </b>
            <p></p>
            <h5>
              <u>Event Coordinator</u>
            </h5>
            <p>
              <b>Smriti Yadav</b> 9319160769
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
