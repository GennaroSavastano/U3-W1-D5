import { Component } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

const URL = `http://www.omdbapi.com/?apikey=a116e171`;
const searchPar = `&s=`;

class MovieList extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    const resp = await fetch(URL + searchPar + this.props.title, {
      method: "GET",
    });

    if (resp.ok) {
      const movies = await resp.json();
      console.log(movies);
      this.setState({ movies: movies.Search });
    }
  };
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    return (
      <Container fluid className="my-5">
        <h2 className="ms-3">{this.props.title} Saga</h2>
        <Row xs={1} sm={2} md={3} lg={6} className="d-flex ms-1 pt-3">
          {this.state.movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="d-flex ">
              <Card className="flex-grow border-0 w-100">
                <Card.Img variant="" src={movie.Poster} className="border-0 cards" />
              </Card>
            </Col>
          ))}
        </Row>
        {this.state.movies.length === 0 && (
          <Alert variant="Warning" className="my-4">
            {" "}
            Errore nel caricamento dei titoli !{" "}
          </Alert>
        )}
      </Container>
    );
  }
}

export default MovieList;
