import React from "react";
import "./styles.css";
import veenu from "./Images/ews/veenu.png";
import aparna from "./Images/ews/aparna.png";
import smriti from "./Images/ews/smriti.png";
import ansh from "./Images/ews/ansh.png";
import mansi from "./Images/ews/mansi.png";
import nishtha from "./Images/ews/nishtha.png";
import ashutosh from "./Images/ews/ashutosh.png";
import arpita from "./Images/ews/arpita.png";
import muskan from "./Images/ews/muskan.png";

import { Figure, Row, Col, Container } from "react-bootstrap";

const ews = () => {
  return (
    <Container>
      <h1 className="head2">About the Club</h1>

      <figure>
        <blockquote class="blockquote">
          <p>
            "Tell me and I forget, teach me and I may remember, involve me and I
            learn."
          </p>
        </blockquote>
        <figcaption class="blockquote-footer">
          By <cite title="Source Title">Albert Einstien</cite>
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
              <Figure.Image src={veenu} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>Dr. Veenu Bhasin</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={aparna} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>Dr. Aparna Dutt</strong>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <p className="head2">Members</p>
        <Row>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={smriti} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Smriti Yadav
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
              <Figure.Image src={mansi} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Mansi Pathak
                  <br />
                  Mathematical Science
                  <br />
                  IIIrd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={arpita} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Arpita Dixit
                  <br />
                  B.A Program
                  <br />
                  IInd Year
                </strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={ashutosh} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Ashutosh Gangwar
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
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={muskan} roundedCircle />
              <Figure.Caption style={{ color: "white" }}>
                <strong>
                  Muskan Bansal
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

export default ews;
