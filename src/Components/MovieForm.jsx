
// src/components/MovieForm.jsx
import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre) {
      addMovie({ title, genre });
      setTitle('');
      setGenre('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
        required
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
