import { Container, Card, CardDeck, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import CodeBotsLogo from "./Images/clubs/codebots.jpeg";
import NetweaversLogo from './Images/clubs/netweavers.png';
import QuizBotsLogo from './Images/clubs/quizbots.png';
import EWSLogo from './Images/clubs/ews.png';

const clubs = (props) => {
  const clubsInfo = [
    {
      imageSrc: NetweaversLogo,
      title: "Netweavers",
      content: "Club for Web Development",
      path: "/clubs/netweavers",
    },
    
    {
      imageSrc: QuizBotsLogo,
      title: "Quizbots",
      content: "Club for Technical Quizes",
      path: "/clubs/quizbots",
    },
    {
      imageSrc: CodeBotsLogo,
      title: "Codebots",
      content: "Club for Coding",
      path: "/clubs/codebots",
    },
    {
      imageSrc: EWSLogo,
      title: "EWS",
      content: "Club for Workshops and Seminars ",
      path: "/clubs/ews",
    },
  ];
  return (
    <div>
      <Container>
        <Jumbotron>
          <p></p>
          <CardDeck>
            {clubsInfo.map((element, key) => {
              return (
                <Card>
                  <Card.Img variant="top" src={element.imageSrc} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.content}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <Button>
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to={element.path}
                        >
                          Explore More
                        </Link>
                      </Button>
                    </small>
                  </Card.Footer>
                </Card>
              );
            })}
          </CardDeck>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default clubs;
