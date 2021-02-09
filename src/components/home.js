import {
  Container,
  Jumbotron,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { Component } from "react";
import teacherInCharge from "../teacher-in-charge.png";
import president from "../president.png";
import xenium2021 from "../xenium2021.jpeg";
import HomeCarousel from "./Carousels/HomeCarousel";
import ContactUs from "./contactUs";
import XeniumVideo from "./Xenium/xenium_video.mp4";

class home extends Component {
  onquerySubmit = (event) => {
    event.preventDefault();
    var name = document.getElementById("queryform").name.value;
    var phone = document.getElementById("queryform").phone.value;
    var email = document.getElementById("queryform").email.value;
    var query = document.getElementById("queryform").query.value;
    fetch("http://localhost:8000/admin/queries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        query: query,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        alert("Query Submitted");
        document.getElementById("queryform").reset();
      })
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
  };

  render() {
    return (
      <Container fluid>
        {" "}
        <Jumbotron fluid style={{ padding: "20px", borderRadius: "10px" }}>
          <h1>
            Parikalan <h2>The Computer Science Society of PGDAV College</h2>
          </h1>
          <p style={{ textAlign: "left" }}>
            <p>
              "You cannot endow even the best machine with initiative; the
              jolliest steamroller will not plant flowers."~ Walter Lippman{" "}
            </p>
            Parikalan- The Computer Science Soceity of P.G.D.A.V. College was
            formed with one objective- unification of students of the Computer
            Science Department in a way that helps them grow through various
            activities and oppurtunities - technical as well as non-technical.
            The soceity has 5 constituents: Team Netweavers, Codebots, Projects,
            Quizbots and Team EWS (Elocution, Workshop and Seminar). All these
            teams coordinate with each other to conduct events throughout the
            year. At the same time, the teams also conduct their own sessions
            where they share information and learn new things. Training sessions
            are also conducted for several things like coding, web designing,
            presenting etc. All in all, the Parikalan soceity strives to shape
            young minds in a way that every student is technologically ahead of
            the soceity but at the same time they are holistically developed
            into better humans.
          </p>
        </Jumbotron>
        <Row>
          <Col lg={4} md={6} xs={12} style={{ marginTop: "5px" }}>
            <video height="240px" width="320px" autoPlay loop>
              <source src={XeniumVideo} type="video/mp4" />
            </video>
          </Col>
          <Col>
            <Image src={xenium2021} fluid margin="0 5px 5px 0" padding="auto" />
          </Col>
        </Row>
        <p></p>
        <p></p>
        <Jumbotron>
          <Row>
            <p></p>
            <Col xs={12} md={3}>
              <Image src={teacherInCharge} roundedCircle />
              <p></p>
              <p>
                <ul></ul>
                <ul>
                  <h6 style={{ textAlign: "center" }}>Dr. Ravish Sharma</h6>
                </ul>
              </p>
            </Col>
            <Col xs={12} md={9}>
              <h3>
                <u>Message from Teacher-Incharge</u>
              </h3>
              <div>
                <p>
                  Dear Students
                  <br /> Welcome to Parikalan, The Computer Science Society of
                  P.G.D.A.V. College, University of Delhi. <br />
                  Parikalan has significantly evolved over the years with the
                  hard work of core team members, head co-ordinators and
                  diligent members of various clubs. Computer clubs are an
                  informal way and perfect opportunity for students to share
                  their passion for technology. The clubs organize technical
                  events throughout the academic session and an inter-college
                  annual technical festival “XENIUM”. The festival includes a
                  plethora of technical events and has a wide participation from
                  students of different colleges and universities across the
                  field of IT.
                  <br /> Let us unfold all the positive potentials that are
                  infinite and we all have within us. Be passionate about your
                  goals, but be flexible in your approach and keep learning.
                  <br /> Dream big, follow your heart and excel at what you do
                  always. Enjoy your work and make everyone around proud. Let
                  your feet always be firm on the ground and head high in the
                  sky.
                  <br /> Best Wishes.
                </p>
              </div>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron>
          <Row>
            <p></p>
            <Col xs={12} md={3}>
              <Image src={president} roundedCircle />
              <p></p>
              <p>
                <ul></ul>
                <ul>
                  <h6 style={{ textAlign: "center" }}>Nitish Gupta</h6>
                </ul>
              </p>
            </Col>
            <Col xs={12} md={9}>
              <h3>
                <u>Message from President</u>
              </h3>
              <div>
                <p>
                  Dear Students I on behalf of the whole Parikalan Team feels
                  immense pleasure to welcome you all in Parikalan, The Computer
                  Science Society of PGDAV College.
                  <br /> Parikalan deals with healthy discussions of events of
                  different areas and aspects of the broad field of Computer
                  Science like Technical Quizzes, Workshops, Seminars, Web
                  Development and much more. We at Parikalan organise
                  Competitions regularly throughout the Year and help students
                  to improve their skills in various fields of Computer Science.
                  <br /> I was there in Parikalan since last two years and I get
                  to learn many new things and many new skills and I can say
                  that Parikalan's fruitful environment, dedicated team have
                  helped me in developing a lot.
                  <br /> I am sure that you all will also explore many new and
                  amazing things by being a part of Parikalan
                </p>
              </div>
            </Col>
          </Row>
        </Jumbotron>
        <HomeCarousel />
        <Jumbotron style={{ backgroundColor: "lightblue" }}>
          <h1>Send us your queries.</h1>
          <Form
            style={{ width: "75%", margin: "auto" }}
            id="queryform"
            onSubmit={this.onquerySubmit}
          >
            <Row>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name..."
                    name="name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone..."
                    name="phone"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your queries.</Form.Label>
              <Form.Control as="textarea" rows={3} name="query" required />
            </Form.Group>
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Form>
        </Jumbotron>
        <ContactUs />
      </Container>
    );
  }
}

export default home;
