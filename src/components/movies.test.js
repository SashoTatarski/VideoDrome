import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Movies from './movies';
import { MemoryRouter } from 'react-router-dom';

it('renders correctly', () => {
  const { getByTestId } = render(<Movies />, {wrapper: MemoryRouter});
  expect(getByTestId('movies')).toBeTruthy();
});

// describe('ListGroup', () => {
//     it('triggers handleGenreSelect function', () => {
//         const handleGenreSelect = jest.fn();

//         const { getByTestId } = render(<Movies />);
//         fireEvent.click(getByTestId('list-group'))
//         expect(handleGenreSelect).toHaveBeenCalled();
//     })
// })