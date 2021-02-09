import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import XeniumVideo from "./xenium_video.mp4";
import ContactUs from "../contactUs";
import XeniumEvent1 from "./xeniumEvent1";
import XeniumEvent2 from "./xeniumEvent2";
import XeniumEvent3 from "./xeniumEvent3";
import XeniumEvent4 from "./xeniumEvent4";

import { connect } from "react-redux";
import { useEffect } from "react";

const Xenium = (props) => {
  const count = 0;

  useEffect(() => {}, [count]);
  const userId = localStorage.userId;
  fetch("http://localhost:8000/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      console.log("ResData: " + resData.eventsArray);
      if (resData.message === "success") {
        if (resData.eventsArray[0]) props.event1True();
        if (resData.eventsArray[1]) props.event2True();
        if (resData.eventsArray[2]) props.event3True();
        if (resData.eventsArray[3]) props.event4True();
      }
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
    });
  return (
    <Container style={{ textAlign: "left" }}>
      <Row style={{ alignItems: "center" }}>
        <Col lg={4} md={6} xs={12} style={{ marginTop: "5px" }}>
          <video height="240px" width="320px" autoPlay loop>
            <source src={XeniumVideo} type="video/mp4" />
          </video>
        </Col>
        <Col lg={8} md={6} xs={12} height="240px" width="320px">
          <b>
            <h1>Xenium 2021</h1>
            <p>
              The annual fest of department of Computer Science, PGDAV College
            </p>
            Hustling our way into 2021 deserves much more than a pat on back and
            Parikalan is here to treat you. We present to you XENIUM - The
            Technical Fest of Computer Science department PGDAV College. Wake up
            the tech geek in you and come join us for the most amazing days of
            the year.
          </b>
        </Col>
      </Row>
      <hr></hr>
      <hr></hr>
      <p></p>
      <Tabs defaultActiveKey="event1">
        <Tab eventKey="event1" title="Impromptu Relay">
          <XeniumEvent1 />
        </Tab>
        <Tab eventKey="event2" title="EWS Event">
          <XeniumEvent2 />
        </Tab>
        <Tab eventKey="event3" title="Web Designing">
          <XeniumEvent3 />
        </Tab>
        <Tab eventKey="event4" title="CodeCrusade">
          <XeniumEvent4 />
        </Tab>
      </Tabs>
      <p></p>
      <ContactUs />
      <p></p>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    event1True: () => dispatch({ type: "event1" }),
    event2True: () => dispatch({ type: "event2" }),
    event3True: () => dispatch({ type: "event3" }),
    event4True: () => dispatch({ type: "event4" }),
  };
};

export default connect(null, mapDispatchToProps)(Xenium);
