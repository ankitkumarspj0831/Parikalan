import {
  Container,
  Jumbotron,
  Carousel,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import iPhone12 from "../iphone12.jpg";
import pic1 from "../pic1.jpeg";
import pic2 from "../pic2.jpeg";
import pic3 from "../pic3.jpeg";
import pic4 from "../pic4.jpeg";
import xenium2021 from "../xenium2021.jpeg";

const home = (props) => {
  console.log(props.location);
  return (
    <Container fluid>
      {" "}
      <Jumbotron fluid style={{ padding: "20px" }}>
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
          activities and oppurtunities - technical as well as non-technical. The
          soceity has 5 constituents: Team Netweavers, Codebots, Projects,
          Quizbots and Team EWS (Elocution, Workshop and Seminar). All these
          teams coordinate with each other to conduct events throughout the
          year. At the same time, the teams also conduct their own sessions
          where they share information and learn new things. Training sessions
          are also conducted for several things like coding, web designing,
          presenting etc. All in all, the Parikalan soceity strives to shape
          young minds in a way that every student is technologically ahead of
          the soceity but at the same time they are holistically developed into
          better humans.
        </p>
      </Jumbotron>
      <Image
        src={xenium2021}
        fluid
      />
      <p></p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
            height="800px"
            width="400px"
          />
          <Carousel.Caption>
            {/*  <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="First slide"
            height="800px"
            width="400px"
          />
          <Carousel.Caption>
            {/*  <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="First slide"
            height="800px"
            width="400px"
          />
          <Carousel.Caption>
            {/*  <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic4}
            alt="First slide"
            height="800px"
            width="400px"
          />
          <Carousel.Caption>
            {/*  <h3 style={{ color: "black" }}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p></p>
      <Jumbotron>
        <Row>
          <Col xs={12} md={4}>
            <Image src={iPhone12} roundedCircle />
            <p></p>
            <p>
              <ul></ul>
              <ul>
                <h6>Dr. Ravish Sharma</h6>
              </ul>
            </p>
          </Col>
          <Col xs={12} md={8}>
            <h3>Message from Teacher-Incharge</h3>
            <div>
              <p>
                Dear Students Welcome to Parikalan, The Computer Science Society
                of P.G.D.A.V. College, University of Delhi. Information
                technology related technical in-house activities are spawned in
                mainly four active computer clubs viz. Code bots, Netweavers,
                Quiz bots and EWS(Elocution, Workshop, Seminar). These clubs are
                an informal way and perfect opportunity for students to share
                their passion for technology. Various clubs organize technical
                events throughout the academic session and an inter-college
                annual technical festival “XENIUM”. The festival includes a
                plethora of technical events and has a wide participation from
                students of different colleges and universities across the field
                of IT. Parikalan has significantly evolved over the years with
                the hard work of core team members, head co-ordinators and
                diligent members of various clubs. Let us unfold all the
                positive potentials that are infinite and we all have within us.
                Be passionate about your goals, but be flexible in your approach
                and keep learning. Dream big, follow your heart and excel at
                what you do always. Enjoy your work and make everyone around
                proud. Let your feet always be firm on the ground and head high
                in the sky. Best Wishes.
              </p>
            </div>
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron style={{ backgroundColor: "lightblue" }}>
        <h1>Send us your queries.</h1>
        <Form style={{ width: "75%", margin: "auto" }}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name..." />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone..." />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your queries.</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

export default home;
