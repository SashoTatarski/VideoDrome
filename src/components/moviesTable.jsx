import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';

const MoviesTable = ({
  movies,
  onDelete,
  onLike,
  sortColumn,
  onSort,
}) => {
  const columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

MoviesTable.propTypes = {
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MoviesTable;
