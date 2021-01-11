import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="classes.navLinks">
          <Navbar expand="lg" style={{ backgroundColor: "#9bc9c8" }}>
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

              <Nav>
                <Nav.Link className="mr-sm-2">
                  <NavLink
                    to="/"
                    activeStyle={{ color: "white" }}
                    onClick={this.props.isLoggedOut}
                  >
                    Logout
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div className="classes.navLinks">
          <Navbar expand="lg" style={{ backgroundColor: "#9bc9c8" }}>
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

              <Nav>
                <Nav.Link className="mr-sm-2">
                  <NavLink to="/auth/signin" activeStyle={{ color: "white" }}>
                    SignIn
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="mr-sm-2">
                  <NavLink to="/auth/signup" activeStyle={{ color: "white" }}>
                    SignUp
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedOut: () => dispatch({ type: "ISLOGGEDOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
