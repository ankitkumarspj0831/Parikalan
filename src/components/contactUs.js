import { Container, Row, Col } from "react-bootstrap";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

const contactUs = () => {
  return (
    <Container style={{backgroundColor: "lightcyan"}}>
      <Row>
        <Col xs={12}>
          <center>
            <h4>
              <EmailIcon /> email address
            </h4>
          </center>
        </Col>
        <Col xs={12}>
          <center>
            <h4>
              <PhoneIcon />  9999999999
            </h4>
          </center>
        </Col>
      </Row>
      <p></p>
    </Container>
  );
};

export default contactUs;
