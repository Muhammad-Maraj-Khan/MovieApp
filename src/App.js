import React, { useEffect, useState } from "react";


import MovieCard from "./MovieCard";
import './App.css'
import SearchIcon from './search.svg'

//fecd7324

const API_URL = "http://www.omdbapi.com?apikey=fecd7324";

const movie1 = {
  "Title": "Amazing Spiederman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman')
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)} />

        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )
      }
    </div>
  );
};

export default App;
