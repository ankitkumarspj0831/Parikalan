import react from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navigation = (props) => {
  return (
    <div className="classes.navLinks">
      <Navbar expand="lg" style={{ backgroundColor: "black" }}>
        <Navbar.Brand>
          <NavLink to="/" exact activeStyle={{ color: "white" }}>
            Parikalan
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/" exact activeStyle={{ color: "white" }}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/clubs" activeStyle={{ color: "white" }}>
                Clubs
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/quiz" activeStyle={{ color: "white" }}>
                Quiz
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navigation;
