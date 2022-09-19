import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Like from './../like';

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOMClient.createRoot(div).render(<Like></Like>);
  });
});

it('renders Like correctly', () => {
  const { queryByTestId } = render(<Like liked={true} />);
  expect(queryByTestId('like')).toBeTruthy();
});

describe('Value change', () => {
  it('updates on change', () => {
    const { queryByTestId } = render(<Like liked={true} />);
    const value = queryByTestId('Like');
    fireEvent.click(value, {target: {value: 'fa fa-heart'}})
    expect(value.value).toBe("fa fa-heart")
  });
});

it('renders Like correctly', () => {
  const { getByTestId } = render(<Like />);
  const input = getByTestId('like');
  expect(input).toBeTruthy();
});

// it('render div', () => {
//     const { getByTestId, getByTitle } = render(<Like liked={true}/>);
//     const classes = getByTestId("'fa fa-heart'");
//     expect(classes).toBeTruthy();
// })

// it('dont render div', () => {

// })

// it('matches snapshot', () => {
//     const tree = renderer.create(<Like liked='false'></Like>).toJSON();
//     expect(tree).toMatchSnapshot();
// })
