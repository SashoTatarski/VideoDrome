import { renderHook } from '@testing-library/react-hooks';
import { getGenres } from '../services/fakeGenreService';
import { useMovies } from './useMovies';
jest.mock('../services/fakeGenreService');

describe('loadGenres from json', () => {
  it('successfully', () => {
    renderHook(() => useMovies());
    expect(getGenres).toBeCalled();
  });
  // it.todo('successfully', () => {
  //   expect(getMovies).toBeCalled();
  // });
});
