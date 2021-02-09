import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class Event3 extends Component {
  state = {
    eventregistrations: [],
  };
  componentDidMount() {
    fetch("https://parikalanpgdav.herokuapp.com/admin/event3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.setState({
          eventregistrations: this.state.eventregistrations.concat(
            resData.registrations
          ),
        });
        console.log("Event registrations");
      })
      .catch((err) => {
        console.log("Error fetching event1 registrations.");
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Event3 Registrations.</h1>
          </Col>
          <Col>
            <h1>Total Registrations: {this.state.eventregistrations.length}</h1>
          </Col>
        </Row>
        {this.state.eventregistrations.length > 0 ? (
          <center>
            <table>
              {this.state.eventregistrations.map((data, index) => {
                return (
                  <tr>
                    <table
                      style={{
                        border: "1px solid black",
                        width: "100%",
                        padding: "100px",
                        margin: "10px",
                      }}
                    >
                      <tr>
                        <th>Serial No:</th>
                        <td>{index + 1}</td>
                      </tr>
                      <tr>
                        <th>Name:</th>
                        <td>{data.name}</td>
                      </tr>
                      <tr>
                        <th>Whatsapp :</th>
                        <td>{data.whatsapp}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{data.email}</td>
                      </tr>
                      <tr>
                        <th>College:</th>
                        <td>{data.college}</td>
                      </tr>
                      <tr>
                        <th>Course :</th>
                        <td>{data.course}</td>
                      </tr>
                      <tr>
                        <th>Year:</th>
                        <td>{data.year}</td>
                      </tr>
                    </table>
                  </tr>
                );
              })}
            </table>
          </center>
        ) : (
          <h2>No registrations so far.</h2>
        )}
      </Container>
    );
  }
}

export default Event3;
