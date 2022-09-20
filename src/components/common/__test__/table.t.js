import { render } from '@testing-library/react';
import React from 'react';
import Table from '../table';

it('renders Table', () => {
  const {getByTestId} = render(<Table />);
  expect(getByTestId('table1')).toBeTruthy();  
});
