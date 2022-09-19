import { renderHook } from '@testing-library/react-hooks';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { useMovies } from './useMovies';
jest.mock('../services/fakeGenreService');
 
console.log(result.getGenres);
describe('loadGenres from json', () => {
  beforeEach(() => {
    jest.resetModules();
    renderHook(() => useMovies());
  });
  it('successfully', () => {
    expect(getGenres).toBeCalled();
  });
  it('successfully', () => {
    expect(getMovies).toBeCalled();
  });
});
