import { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/auth/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        if (response.message === "success") {
          console.log("User successfully signed in.");
          this.props.onSuccess();
          this.props.history.push("/");
        }
      })
      .catch((err) => {
        console.log("[SignIn]: Fetching from backend failed.");
        console.log("Error: " + err);
      });
  };
  render() {
    return (
      <Container>
        <Form style={{ margin: "10px", width: "80%" }}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.onSubmit}>
                Sign In
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: () => dispatch({ type: "SUCCESS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
