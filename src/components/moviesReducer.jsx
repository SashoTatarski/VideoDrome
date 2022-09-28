import { paginate } from '../utils/paginate';

export const moviesReducer = (state, { type, field, value }) => {
  switch (type) {
    case 'changeValue':
      return { ...state, [field]: value };

    case 'handleDelete': {
      const movie = value;
      const filteredMovies = state.movies.filter(
        (m) => m._id !== movie._id
      );
      return { ...state, [field]: filteredMovies };
    }

    case 'handleLike': {
      const clonedMovies = [...state.movies];
      const movie = value;

      const index = clonedMovies.indexOf(movie);
      clonedMovies[index] = { ...clonedMovies[index] };
      clonedMovies[index].liked = !clonedMovies[index].liked;

      return { ...state, [field]: clonedMovies };
    }

    default:
      return state;
  }
};

export const initialState = {
  movies: [],
  genres: [],
  selectedGenre: null,
  currentPage: 1,
  pageSize: 4,
  sortColumn: { path: 'title', order: 'asc' },
  searchQuery: '',
};

export const getPagedData = ({
  movies,
  searchQuery,
  selectedGenre,
  sortColumn,
  pageSize,
  currentPage
}) => {
  let filtered = movies;

  if (searchQuery)
    filtered = movies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  else if (selectedGenre && selectedGenre._id)
    filtered = movies.filter(
      (m) => m.genre._id === selectedGenre._id
    );

  const sorted = _.orderBy(
    filtered,
    [sortColumn.path],
    [sortColumn.order]
  );
  const paginatedMovies = paginate(sorted, currentPage, pageSize);

  return { totalCount: filtered.length, data: paginatedMovies };
};
