import React from "react";
import "./styles.css";
import ankit from "./Images/netweavers/ankit.png";
import adya from "./Images/netweavers/adya.png";
import akanksha from "./Images/netweavers/akanksha.png";
import preksha from "./Images/netweavers/preksha.png";
import roshan from "./Images/netweavers/roshan.png";
import ravish from "./Images/netweavers/ravish.png";
import charu from "./Images/netweavers/charu.jpg";

import { Figure, Row, Col, Container } from "react-bootstrap";

const netweavers = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>“Websites promote you 24/7: No employee will do that.”</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          By <cite title="Source Title">Paul Cookson</cite>
        </figcaption>
      </figure>
      <br />
      <p>
        <strong>
          <i>
            "People don't care about what you say, they care about what you
            build."
            <br /> Imagine if you have the craving of debugging the error to
            build robust and automated Dynamic Interface but there is no right
            platform to direct you, that's where we introduce you with our Club
            Netweavers.
            <br />
            We provide platform for real time hands-on MEAN stack for the web
            development.
            <br /> Our only motive is to train the members with new technology
            and advance skills to build the attractive interfaces, modules and
            websites.
          </i>
        </strong>
      </p>
      <Container>
        <h1 className="head2">Core Team</h1>
        <p className="head2">Mentors</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={ravish} roundedCircle />
              <Figure.Caption>
                <strong style={{ color: "white" }}>Dr. Ravish Sharma</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={charu} roundedCircle />
              <Figure.Caption>
                <strong style={{ color: "white" }}>Dr. Charu Puri</strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <p className="head2">Members</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={ankit} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Ankit Kumar
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  IIIrd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={adya} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Adya Mishra
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={preksha} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Preksha Jha
                  <br />
                  B.Sc. Mathematical Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={akanksha} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Akanksha Jain
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={roshan} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Roshan Kumar
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      {/* <h1 className="head2">Achievements</h1>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 posters"
            src={event1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 posters"
            src={event2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 posters"
            src={event3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 posters"
            src={event4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 posters"
            src={event5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}
      <p></p>
      <p></p>
    </Container>
  );
};

export default netweavers;
