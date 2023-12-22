import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFIlm from "./SingleFilm";

class NetflixRow extends Component {
  state = {
    searchQuery: "Transformers",
    films: [],
  };

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b84f7858&s=${this.state.searchQuery}`);

      if (response.ok) {
        const films = await response.json();
        this.setState({ films: films.Search || [] });
      } else {
        console.error("Errore nel fetch dei film");
      }
    } catch (error) {
      console.error("Errore nel fetch dei film", error);
    }
  };

  render() {
    return (
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {this.state.films.slice(0, 6).map((film, index) => (
          <SingleFIlm key={index} Url={film.Poster} />
        ))}
      </Row>
    );
  }
}

export default NetflixRow;
