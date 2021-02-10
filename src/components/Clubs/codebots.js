import React from "react";
import "./styles.css";
import Figure from "react-bootstrap/Figure";
import mentor1 from "./Images/codebots/mentor1.png";
import mentor2 from "./Images/codebots/mentor2.png";
import member1 from "./Images/codebots/member1.png";
import member2 from "./Images/codebots/member2.png";
import member3 from "./Images/codebots/member3.png";
import member4 from "./Images/codebots/member4.png";
import member5 from "./Images/codebots/member5.png";

import { Row, Col, Container } from "react-bootstrap";

const codebots = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>
            “Understanding the fundamental principles of coding gives one an
            insight to more complex systems, how technology is layered, and how
            simple systems can be developed into more complex ones.”
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          By <cite title="Source Title">Trudy Norris-Grey</cite>
        </figcaption>
      </figure>
      <br />
      <p>
        <strong>
          <i>
            Coding is one of the most important aspect of Tech World. We at
            Codebots, The Coding Club of Parikalan tries our level best to
            create a community of fine coders who can take part in different
            competitions organised in and outside the campus.
            <br />
            The Team Codebots works to promote Competitive Coding and tries its
            level best to make every Computer Science student aware about the
            importance of Competitive Coding.
            <br />
            We organise various Coding Competitions that can help the students
            to not only enhance their Coding skills but which also help them to
            develop their logical thinking.
          </i>
        </strong>
      </p>
      <Container>
        <h1 className="head2">Core Team</h1>
        <p className="head2">Mentors</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={mentor1} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>Mrs. Kirti Yadav</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={mentor2} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>Mrs. Purnima Bindal</strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <p className="head2">Members</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={member1} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Arpit Samadhiya
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
              <Figure.Image src={member2} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
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
              <Figure.Image src={member5} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Markandey Upadhyay
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
              <Figure.Image src={member4} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Anwesha Sanyal
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  Ist Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={member3} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Meghansh Tyagi
                  <br />
                  B.Sc. H Comp Science
                  <br />
                  Ist Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default codebots;
