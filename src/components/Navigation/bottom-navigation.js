import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./bottom-navigation.css";

const bottomNavigation = () => {
  return (
    <Container>
      <Row style={{ color: "white" }}>
        <Col className="col1" xs={12}>
          <h6> &copy; 2021- Parikalan PGDAV. All rights reserved.</h6>
        </Col>
        <Col className="col2" xs={12}>
          <a
            href="https://www.facebook.com/ParikalanSociety/"
            className="facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a
            href="https://www.instagram.com/parikalan_pgdav/"
            className="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a
            href="https://chat.whatsapp.com/KwzkmuFcZzWCSP2pA3zkiA"
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a
            href="http://pgdavcollege.edu.in/"
            target="_blank"
            rel="noreferrer"
          >
            PGDAV College
          </a>
        </Col>
      </Row>
      <p></p>
    </Container>
  );
};

export default bottomNavigation;
