import _ from 'lodash';
import React, { useState } from 'react';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
import { useGenres } from './useGenres';
import { useMovies } from './useMovies';

const Movies = () => {
  const { movies, genres, handleDelete, handleLike } = useMovies();
  const {
    selectedGenre,
    currentPage,
    handlePageChange,
    handleGenreSelect,
    pageSize
  } = useGenres();
  
  const [sortColumn, setSortColumn] = useState({
    path: 'title',
    order: 'asc',
  }); 

  const handleSort = (column) => {
    setSortColumn(column);
  };

  const getPagedData = () => {
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );
    const paginatedMovies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: paginatedMovies };
  };

  const { totalCount, data: paginatedMovies } = getPagedData();

  return !movies.length ? (
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
        <p>Showing {totalCount} movies</p>
        <MoviesTable
          movies={paginatedMovies}
          sortColumn={sortColumn}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
