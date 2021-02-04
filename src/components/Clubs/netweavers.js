import React from "react";
import "./styles.css";
import ankit from "./Images/netweavers/ankit.png";
import adya from "./Images/netweavers/adya.png";
import akanksha from "./Images/netweavers/akanksha.png";
import preksha from "./Images/netweavers/preksha.png";
import roshan from "./Images/netweavers/roshan.png";
import ravish from './Images/netweavers/ravish.png';
import demogg from './Images/demogg.png';

import { Figure, Row, Col, Container } from "react-bootstrap";

const netweavers = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>
          “Websites promote you 24/7: No employee will do that.”
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          By <cite title="Source Title">Paul Cookson</cite>
        </figcaption>
      </figure>
      <br />
      <p>
        <strong>
          <i>
            "Speak clearly if you speak at all; carve every word before you let
            it fall." What's the use of having so much knowledge if you can't
            put it forward in a good way?
            <br />
            This is exactly what EWS Club of Parikalan aims at. As the name
            implies EWS i.e., Elocution, Workshop and Seminar Club has only one
            motive: to develop interpersonal and intrapersonal skills of the
            students. And the pandemic was not a hurdle in the way. The members
            organise various activities such as quiz competition, essay writing,
            paper presentation etc. to enhance the said skills. Previously, the
            club had also organised some illuminating seminars and webinars by
            some renowned speakers who not only engaged with students but also
            imparted their valuable knowledge.
            <br />
            EWS Club gives students a chance to take part in any activity
            irrespective of their field of study. The club plans to increase the
            seminars in the upcoming semester and this time students will also
            get to present their sessions.
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
                <strong>Dr. Ravish Sharma</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={demogg} roundedCircle />
              <Figure.Caption>
                <strong>Dr. Charu Puri</strong>
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
              <Figure.Caption>
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
              <Figure.Caption>
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
              <Figure.Caption>
                <strong>
                  Preksha
                  <br />
                  Mathematical Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={akanksha} roundedCircle />
              <Figure.Caption>
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
              <Figure.Caption>
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
