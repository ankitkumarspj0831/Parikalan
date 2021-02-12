import { Container, Row, Col } from "react-bootstrap";
import EmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";

const contactUs = () => {
  return (
    <Container style={{ backgroundColor: "lightcyan", borderRadius: "10px" }}>
      <Row>
        <Col xs={12} lg={6}>
          <center>
            <h4>
              <EmailIcon /> parikalan.pgdav@gmail.com
            </h4>
          </center>
        </Col>
        <Col xs={12} lg={6}>
          <center>
            <h4>
              <PhoneIcon /> 9260906197- Nitish Gupta
            </h4>
          </center>
        </Col>
      </Row>
      <p></p>
    </Container>
  );
};

export default contactUs;
