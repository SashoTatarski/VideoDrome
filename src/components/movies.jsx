import React, { useEffect, useState } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [selectedGenre, setSelectedGenre] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];

    setGenres(genres);
    setMovies(getMovies());
  }, []);

  const { length: count } = movies;

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;
  const paginatedMovies = paginate(filtered, currentPage, pageSize);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setCurrentPage(1);
    setSelectedGenre(genre);
  };

  const handleSort = (path) => {
    console.log(path);
  };

  return count === 0 ? (
    <p>No movies in the table</p>
  ) : (
    <div className="row">
      <div className="col-2">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
        />
      </div>
      <div className="col">
        <p>Showing {filtered.length} movies</p>
        <MoviesTable
          movies={paginatedMovies}
          onDelete={handleDelete}
          onLike={handleLike}
          onSort={handleSort}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
