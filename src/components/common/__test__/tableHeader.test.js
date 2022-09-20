import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import TableHeader from '../tableHeader';

describe('TableHeader Component', () => {
  it('renders TableHeader', () => {
    const { getByTestId } = render(<TableHeader columns={[]} />);
    const tableHeader = getByTestId('table-header');
    expect(tableHeader).toBeTruthy();
  });

//   it('check if onClick event fires', () => {
//     const renderSortIcon = jest.fn();
//     const onSort = jest.fn();

//     const { container } = render(
//       <TableHeader
//         onSort={onSort}
//         onClick={renderSortIcon}
//         sortColumn={'title'}
//         columns={[{ path: 'title', label: 'Title' }]}
//       />
//     );
    
//     fireEvent.click(container.getElementsByClassName('clickable')[0]);
//     expect(renderSortIcon).toHaveBeenCalled();
//   });
});
