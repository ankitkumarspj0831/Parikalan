import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import XeniumVideo from "./xenium_video.mp4";
import ContactUs from "../contactUs";
import XeniumEvent from "./xeniumEvent";

const xenium = () => {
  return (
    <Container style={{ textAlign: "left" }}>
      <Row style={{alignItems:"center"}}>
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
          <XeniumEvent />
        </Tab>
        <Tab eventKey="event2" title="Event2">
          Tab 2
        </Tab>
        <Tab eventKey="event3" title="Event3">
          Tab3
        </Tab>
        <Tab eventKey="event4" title="Event4">
          Tab4
        </Tab>
      </Tabs>
      <p></p>
      <ContactUs />
      <p></p>
    </Container>
  );
};

export default xenium;
