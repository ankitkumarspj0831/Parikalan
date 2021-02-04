import React from "react";
import "./styles.css";
import himanshu from "./Images/quizbots/himanshu.png";
import priyanka from "./Images/quizbots/priyanka.png";
import nishtha from "./Images/quizbots/nishtha.png";
import harsh from "./Images/quizbots/harsh.png";
import hitesh from "./Images/quizbots/hitesh.png";
import rahil from "./Images/quizbots/rahil.png";
import ansh from "./Images/quizbots/ansh.png";
import demobb from "./Images/demobb.png";

import { Figure, Row, Col, Container } from "react-bootstrap";

const quizbots = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>
            "Quizzes are the best way to test knowledge of others, increasing our own knowledge at the same time."
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
         <cite title="Source Title"></cite>
        </figcaption>
      </figure>
      <br />
      <p>
        <strong>
          <i>
            What is quizbot🤔🤔?
            <br />
            Quizbots is a club which is a combination of a must needed skill "
            quizzing " and an ever growing and evolving topic " technology ".
            Our tasks.. We prepare and spread knowledge about recent and
            important tech facts. We are a team of tech geeks always ready to
            gain more and know new tech stuffs. We promote entrepreneurship and
            believe in solving societal problems using technology.
            <br />
            Why only quiz?? Technical quiz is something which increases the
            knowledge and it is one of the most common competition which is
            almost pary of every tech event. We organise events and webinars
            which have an ultimate aim to increase your knowledge. Join us and
            get a bit closer to your tech love
          </i>
        </strong>
      </p>
      <Container>
        <h1 className="head2">Core Team</h1>
        <p className="head2">Mentors</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={priyanka} roundedCircle />
              <Figure.Caption>
                <strong>Priyanka Gupta</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={demobb} roundedCircle />
              <Figure.Caption>
                <strong>Akshay Sir</strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <p className="head2">Members</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={himanshu} roundedCircle />
              <Figure.Caption>
                <strong>
                  Himanshu Tiwari
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
              <Figure.Image src={ansh} roundedCircle />
              <Figure.Caption>
                <strong>
                  Ansh Goyal
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
              <Figure.Image src={rahil} roundedCircle />
              <Figure.Caption>
                <strong>
                  Rahil Noor Khan
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
              <Figure.Image src={hitesh} roundedCircle />
              <Figure.Caption>
                <strong>
                  Hitesh Sharma
                  <br />
                  B.Sc. H Computer Science
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={harsh} roundedCircle />
              <Figure.Caption>
                <strong>
                  Harsh
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
              <Figure.Image src={nishtha} roundedCircle />
              <Figure.Caption>
                <strong>
                  Nishtha Mahajan
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

export default quizbots;
