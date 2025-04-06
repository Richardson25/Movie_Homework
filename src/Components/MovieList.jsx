
// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, removeMovie }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies added yet</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} removeMovie={() => removeMovie(index)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
