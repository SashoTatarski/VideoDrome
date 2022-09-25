import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Input from '../input';


describe('Input Component', () => {
  it('renders Input', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });
});
