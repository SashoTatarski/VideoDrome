import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
import SearchBox from './common/searchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);  

  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc', });
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    setGenres(genres);

    setMovies(getMovies);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setCurrentPage(1);
    setSelectedGenre(genre);
    setSearchQuery('');
  };

  const handleSort = (column) => {
    setSortColumn(column);
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    setCurrentPage(1);
  }

  const getPagedData = () => {
    let filtered = movies;
    if (searchQuery)
      filtered = movies.filter(m => 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
    else if (selectedGenre && selectedGenre._id)
        filtered = movies.filter(m => m.genre._id === selectedGenre._id);

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
          movies={paginatedMovies}
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
