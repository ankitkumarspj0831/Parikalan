import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class Queries extends Component {
  state = {
    fetchedqueries: [],
  };
  componentDidMount() {
    fetch("http://localhost:8000/admin/fetchqueries", {
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
          fetchedqueries: this.state.fetchedqueries.concat(resData.queries),
        });
        console.log("Queries Fetched");
      })
      .catch((err) => {
        console.log("Error fetching queries");
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Queries</h1>
          </Col>
          <Col>
            <h1>Total Queries: {this.state.fetchedqueries.length}</h1>
          </Col>
        </Row>
        {this.state.fetchedqueries.length > 0 ? (
          <center>
            <table>
              {this.state.fetchedqueries.map((data, index) => {
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
                        <th>Phone:</th>
                        <td>{data.phone}</td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>{data.email}</td>
                      </tr>
                      <tr>
                        <th>Query:</th>
                        <td>{data.query}</td>
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

export default Queries;
