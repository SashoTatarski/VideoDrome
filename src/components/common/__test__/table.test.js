import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../table';

jest.mock('../tableHeader');
jest.mock('../tableBody');

it('Table component is rendered', () => {
  const {getByTestId} = render(<Table />);
  expect(getByTestId('table')).toBeTruthy();
});
