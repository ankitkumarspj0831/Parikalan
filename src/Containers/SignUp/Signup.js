import React, { Component } from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import clas from "./SignUp.module.css";
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    college: "",
    course: "",
    year: "",
    whatsapp: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    fetch("https://parikalanpgdav.herokuapp.com/auth/signup", {
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
        if (response.message === "created") {
          console.log(response);
          this.props.history.push("/auth/signin");
        }
      })
      .catch((err) => {
        console.log("[SignUP]: Fetching from backend failed.");
        console.log("Error " + err);
      });
  };
  render() {
    document.title = "Paikalan-Signup";
    return (
      <Container className={clas.container} style={{ width: "80%" }}>
        <Form className={clas.label} onSubmit={this.onSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.onChange}
                required
              />
            </Col>
          </Form.Group>

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
          <Form.Text className={clas.text} id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <p></p>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              College
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="College"
                name="college"
                onChange={this.onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Course
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Course"
                name="course"
                onChange={this.onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Year
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Year"
                name="year"
                onChange={this.onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              WhatsApp Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Whatsapp Number"
                name="whatsapp"
                onChange={this.onChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign Up</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Signup;
