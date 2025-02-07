import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class MovieList extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={6}>
          <Col>
            <Card>
              <Card.Img variant="top" src={0.7} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieList;
