import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Like from './../like';

describe('Like Component', () => {
  it('renders Like', () => {
    const {getByTestId} = render(<Like />);
    const like = getByTestId('like');
    expect(like).toBeTruthy();
  });

  it('renders filled heart - fa-active', () => {
    const {container} = render(<Like liked={true} />);
    expect(container.getElementsByClassName('fa fa-heart').length).toBe(1)
  })

  it('renders not filled - heart fa-active-o', () => {
    const {container} = render(<Like liked={false} />);
    expect(container.getElementsByClassName('fa fa-heart-o').length).toBe(1)
  })

  it('check if onClick event fires', () => {
    const onClick = jest.fn();
    const {getByTestId} = render(<Like onClick={onClick} />); 
    fireEvent.click(getByTestId('like'));
    expect(onClick).toHaveBeenCalled();
  })
})
