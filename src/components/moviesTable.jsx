import React from 'react';
import Like from './common/like';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

const MoviesTable = ({
  movies,
  onDelete,
  onLike,
  sortColumn,
  onSort,
}) => {
  const columns = [
    { path: 'title', label: 'Title' },
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
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default MoviesTable;
