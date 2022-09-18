import React, { useState } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const { length: count } = movies;

  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const handleLike = (movie) => {
    debugger;
    const clonedMovies = [...movies];
    const index = clonedMovies.indexOf(movie);
    clonedMovies[index] = { ...clonedMovies[index]};
    clonedMovies[index].liked = !clonedMovies[index].liked;

    setMovies(clonedMovies);
  };

  return count === 0 ? (
    <p>No movies in the table</p>
  ) : (
    <>
      <p>Showing {count} movies</p>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => handleLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  type="button"
                  class="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
