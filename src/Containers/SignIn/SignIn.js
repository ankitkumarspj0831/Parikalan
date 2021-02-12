import { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import classes from "./SignIn.module.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    this.props.onSignIn(event, {
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    document.title="Parikalan-SignIn";
    return (
      <Container
        className={classes.container}
        fluid style={{ width: "80%" }} 
      >
        <Form className={classes.label} onSubmit={this.onSubmit}>
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
                required
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
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col /* sm={{ span: 10, offset: 2 }} */>
              <Button type="submit" style={{ align: "center" }}>
                Sign In
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
