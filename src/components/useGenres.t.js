import { act, renderHook } from '@testing-library/react-hooks';
import { useGenres } from './useGenres';

describe('handlePageChange', () => {
  it('sets current page', () => {
    //Arrange
    const { result } = renderHook(useGenres);
    //Act
    act(() => {
      result.current.handlePageChange(1);
    });

    expect(result.current.currentPage).toBe(1);
  });
});

describe('handleGenreSelect', () => {
  it('sets selected genre', () => {
    const { result } = renderHook(useGenres);
    act(() => {
      result.current.handleGenreSelect('Action');
    });
    expect(result.current.selectedGenre).toBe('Action');
  });
  
  it('sets current page to 1', () => {
    const { result } = renderHook(useGenres);
    act(() => {
      result.current.handleGenreSelect('Action');
    });
    expect(result.current.currentPage).toBe(1);
  });
});
