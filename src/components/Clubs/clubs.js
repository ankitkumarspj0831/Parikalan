import { Container, Card, CardDeck, Button, Jumbotron } from "react-bootstrap";
import Parikalan from "../../parikalan.png";
import { Link } from "react-router-dom";
import CodeBotsLogo from "../../codebots.jpeg";

const clubs = (props) => {
  const clubsInfo = [
    {
      imageSrc: Parikalan,
      title: "Netweavers",
      content: "Club for Web Development",
      path: "/clubs/netweavers",
    },
    {
      imageSrc: CodeBotsLogo,
      title: "Codebots",
      content: "Club for Coding",
      path: "/clubs/netweavers",
    },
    {
      imageSrc: Parikalan,
      title: "Quizbots",
      content: "Club for Technical Quizes",
      path: "/clubs/netweavers",
    },
    {
      imageSrc: Parikalan,
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
