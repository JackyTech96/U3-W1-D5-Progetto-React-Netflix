import { Component } from "react";
import { Alert, Row, Spinner } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class NetflixRow extends Component {
  state = {
    films: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchFilms();
  }
  componentDidUpdate(prevProps) {
    // Verifico se le props sono cambiate
    if (this.props.movieTitle !== prevProps.movieTitle) {
      // Se sono cambiate, esegue una nuova fetch
      this.fetchFilms();
    }
  }

  fetchFilms = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b84f7858&s=${this.props.movieTitle}`);

      if (response.ok) {
        const data = await response.json();
        const films = data.Search || [];
        this.setState({ films, loading: false, error: null });
      } else {
        console.error("Errore nel fetch dei film");
      }
    } catch (error) {
      this.setState({ error: "Si è verificato un errore durante il recupero dei film.", loading: false });
      console.error("Errore nel fetch dei film", error);
    }
  };

  render() {
    return (
      <>
        <h4 className="text-white">{this.props.categoryTitle}</h4>
        {this.state.loading && (
          <Spinner animation="border" role="status" variant="light">
            <span>Loading...</span>
          </Spinner>
        )}

        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}

        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {" "}
          {this.state.films.slice(0, 6).map((film, index) => (
            <SingleFilm key={index} Url={film.Poster} alt={film.Title} />
          ))}
        </Row>
      </>
    );
  }
}

export default NetflixRow;
