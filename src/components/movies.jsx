import _ from 'lodash';
import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { getGenres } from '../services/fakeGenreService';

import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import SearchBox from './common/searchBox';
import { moviesReducer, initialState, getPagedData } from './moviesReducer';
import MoviesTable from './moviesTable';
import { getMovies } from './../services/fakeMovieService';

const Movies = () => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const { movies, genres, searchQuery, selectedGenre, currentPage, pageSize, sortColumn} = state;
  
  useEffect(() => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    dispatch({ type: 'changeValue', field:'genres', value: genres})
    
    dispatch({ type: 'changeValue', field:'movies', value: getMovies()});
  }, []);

  const handleDelete = (movie) => {    
    dispatch({ type: 'handleDelete', field: 'movies', value: movie});
  };

  const handleLike = (movie) => {    
    dispatch({ type: 'handleLike', field: 'movies', value: movie});
  };

  const handlePageChange = (page) => {
    dispatch({ type: 'changeValue', field: 'currentPage', value: page});
  };

  const handleGenreSelect = (genre) => {
    dispatch({ type: 'changeValue', field: 'currentPage', value: 1});
    dispatch({ type: 'changeValue', field:'selectedGenre', value: genre});
    dispatch({ type: 'changeValue', field: 'searchQuery', value: ''});
  };

  const handleSort = (column) => {
    dispatch({ type: 'changeValue', field: 'sortColumn', value: column});
  };
  
  const handleSearch = (query) => {
    dispatch({ type: 'changeValue', field: 'searchQuery', value: query});
    dispatch({ type: 'changeValue', field: 'selectedGenre', value: null});
    dispatch({ type: 'changeValue', field: 'currentPage', value: 1});
  }  
  
  const {totalCount, data} = getPagedData(state);

  return !movies.length ? (
    <p>No movies in the table</p>
  ) : (
    <div className="row" data-testid="movies">
      <div className="col-2">
        <ListGroup
          items={genres}
          selectedItem={selectedGenre}
          onItemSelect={handleGenreSelect}
          testId="list-group"
        />
      </div>
      <div className="col">
        <Link
          to="/movies/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New Movie
        </Link>
        <p>Showing {totalCount} movies</p>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <MoviesTable
          movies={data}
          sortColumn={sortColumn}
          onLike={handleLike}
          onDelete={handleDelete}
          onSort={handleSort}
          testId="movies-table"
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          testId="pagination"
        />
      </div>
    </div>
  );
};

export default Movies;
