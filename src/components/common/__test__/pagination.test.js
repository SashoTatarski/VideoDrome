import { render } from '@testing-library/react';
import React from 'react';
import Pagination from './../pagination';

it('Pagination component is rendered', () => {
  const { getByTestId } = render(<Pagination />);
  expect(getByTestId('pagination')).toBeTruthy();
});

it('Pagination component is rendered', () => {
  const { container } = render(
    <Pagination itemsCount={1} pagesSize={1} />
  );
  debugger;
  expect(container.innerHTML).toEqual('');
});
