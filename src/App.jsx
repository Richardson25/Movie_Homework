
// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <Header />
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} />
      <Footer />
    </div>
  );
};

export default App;



 
