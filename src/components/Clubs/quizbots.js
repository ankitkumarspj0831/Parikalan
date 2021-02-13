import React from "react";
import "./styles.css";
import himanshu from "./Images/quizbots/himanshu.png";
import priyanka from "./Images/quizbots/priyanka.png";
import nishtha from "./Images/quizbots/nishtha.png";
import harsh from "./Images/quizbots/harsh.png";
import hitesh from "./Images/quizbots/hitesh.png";
import rahil from "./Images/quizbots/rahil.png";
import ansh from "./Images/quizbots/ansh.png";
import akshay from "./Images/quizbots/akshay.png";
import yamini from "./Images/quizbots/yamini.png";

import { Figure, Row, Col, Container } from "react-bootstrap";

const quizbots = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>
            "Quizzes are the best way to test knowledge of others, increasing
            our own knowledge at the same time."
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
            Quizbots is a club which is a combination of a must needed skill "
            quizzing " and an ever growing and evolving topic " technology ".
            <br /> We prepare and spread knowledge about recent and important
            tech facts. We are a team of tech geeks always ready to gain more
            and know new tech stuffs. We promote entrepreneurship and believe in
            solving societal problems using technology.
            <br />
            Technical quiz is something which increases the knowledge and it is
            one of the most common competition which is almost pary of every
            tech event. We organise events and webinars which have an ultimate
            aim to increase your knowledge. Join us and get a bit closer to your
            tech love
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
              <Figure.Caption style={{ color: "white" }}>
                <strong>Priyanka Gupta</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={akshay} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>Akshay Chamoli</strong>
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
              <Figure.Caption style={{ color: "white" }}>
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
              <Figure.Image src={yamini} roundedCircle />
              <Figure.Caption style={{color: "white"}}>
                <strong>
                  Yamini Sharma
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
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Ansh Rastogi
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
              <Figure.Caption style={{ color: "white" }}>
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
              <Figure.Caption style={{ color: "white" }}>
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
              <Figure.Caption style={{ color: "white" }}>
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
              <Figure.Caption style={{ color: "white" }}>
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
      <p></p>
      <p></p>
    </Container>
  );
};

export default quizbots;
