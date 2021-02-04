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
import event1 from "./Images/codebots/poster1.png";
import event2 from "./Images/codebots/poster2.png";
import event3 from "./Images/codebots/poster3.png";
import event4 from "./Images/codebots/poster4.png";
import event5 from "./Images/codebots/poster5.png";
import {
  Image,
  Row,
  Col,
  Carousel,
  Container,
  Jumbotron,
} from "react-bootstrap";

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
              <Figure.Image src={mentor1} />
              <Figure.Caption>
                <strong>Mrs. Kirti Yadav</strong>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col xs={6} md={4}>
            <Figure>
              <Figure.Image src={mentor2} />
              <Figure.Caption>
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
              <Figure.Caption>
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
              <Figure.Caption>
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
              <Figure.Caption>
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
              <Figure.Caption>
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
              <Figure.Caption>
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
      <h1 className="head2">Achievements</h1>
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
      </Carousel>
    </Container>
  );
};

export default codebots;
