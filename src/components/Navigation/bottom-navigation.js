import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./bottom-navigation.css";

const bottomNavigation = () => {
  return (
    <Container>
      <Row>
        <Col className="col1" xs={12}>
          <h6> &copy; 2021- Parikalan PGDAV. All rights reserved.</h6>
        </Col>
        <Col className="col2" xs={12}>
          <a href="#facebook" className="facebook" target="_blank">
            <FacebookIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a href="#instagram" className="instagram" target="_blank">
            <InstagramIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a href="#whatapp" className="whatsapp" target="_blank">
            <WhatsAppIcon style={{ marginRight: "10px", fontSize: "30px" }} />
          </a>
          <a href="http://pgdavcollege.edu.in/" target="_blank">PGDAV College</a>
        </Col>
      </Row>
      <p></p>
    </Container>
  );
};

export default bottomNavigation;
