import { Container } from "react-bootstrap";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

const bottomNavigation = () => {
  return (
    <Container>
      <div style={phantom} />
      <div style={style}>Footer</div>
    </Container>
  );
};

export default bottomNavigation;
