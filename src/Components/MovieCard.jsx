
// src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, removeMovie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
      <button onClick={removeMovie}>Remove</button>
    </div>
  );
};

export default MovieCard;
