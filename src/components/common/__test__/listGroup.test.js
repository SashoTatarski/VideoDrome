import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { getGenres } from './../../../services/fakeGenreService';
import ListGroup from './../listGroup';

describe('ListGroup Component', () => {
  it('renders ListGroup', () => {
    const { getAllByTestId } = render(
      <ListGroup items={getGenres()} />
    );
    expect(getAllByTestId('list-group')[0]).toBeTruthy();
  });
  //   it('check if onClick event fires', () => {
  //     const onItemSelect = jest.fn();
  //     const {getAllByTestId} = render(<ListGroup items={getGenres()}/>);
  //     fireEvent.click(getAllByTestId('list-group')[0]);
  //     expect(onItemSelect).toHaveBeenCalled();
  //   })
});
