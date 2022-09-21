import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ListGroup from './common/listGroup';
import Movies from './movies';

it('renders correctly', () => {
  const { getByTestId } = render(<Movies />);

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