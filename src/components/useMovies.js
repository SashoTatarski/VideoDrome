import { useEffect, useState } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];

    setGenres(genres);
    setMovies(getMovies());
  }, []);

  const handleDelete = (movie) => {
    const filteredMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filteredMovies);
  };

  const handleLike = (movie) => {
    const clonedMovies = [...movies];
    const index = clonedMovies.indexOf(movie);
    clonedMovies[index] = { ...clonedMovies[index] };
    clonedMovies[index].liked = !clonedMovies[index].liked;

    setMovies(clonedMovies);
  };

  return { movies, genres, handleDelete, handleLike };
};
