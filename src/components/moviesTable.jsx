import React from 'react';
import Like from './common/like';
import Table from './common/table';

const MoviesTable = ({
  movies,
  onDelete,
  onLike,
  sortColumn,
  onSort,
  testId
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
    <Table      
      columns={columns}
      data={movies}
      sortColumn={sortColumn}
      onSort={onSort}
      testId={testId}
    />
  );
};

export default MoviesTable;
