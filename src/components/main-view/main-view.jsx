import React from "react";

import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "./movie-card";

export class MainView extends React.Component {
  //way to identify whether there was a user click or not.
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: "Inception",
          Description: "des c1...",
          ImagePath: "...",
        },
        {
          _id: 2,
          Title: "The Shawshank Redemption",
          Description: "desc2...",
          ImagePath: "...",
        },
        {
          _id: 3,
          Title: "Gladiator",
          Description: "desc3...",
          ImagePath: "...",
        },
      ],
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (selectedMovie)
      return (
        <MovieView
          movie={selectedMovie}
          onBackClick={(newSelectedMovie) => {
            this.setsSelectedMovie(newSelectedMovie);
          }}
        />
      );

    if (movies.length === 0)
      return <div className="main-view">The list is empty</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <Row className="justify-content-md-center">
            <Col md={8}>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          </Row>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}

export default MainView;
