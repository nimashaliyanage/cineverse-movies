import React, { useState, useEffect } from "react";
import "./Banner.css";
import MovieContent from "../Components/MovieContent";
import MovieName from "../Components/MovieName";
import MovieTrailer from "../Components/MovieTrailer";
import MovieSwiper from "../Components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie" key={movie._id}>
            <img
              src={movie.bgImg}
              alt="background image"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 ">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12 ">
                  <MovieName movie={movie} />
                  <MovieTrailer movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
