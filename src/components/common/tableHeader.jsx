import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ sortColumn, onSort, columns }) => {
  const raiseSort = (path) => {
    const column = { ...sortColumn };
    if (column.path === path)
      column.order = column.order === 'asc' ? 'desc' : 'asc';
    else {
      column.path = path;
      column.order = 'asc';
    }

    onSort(column);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc')
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead data-testid="table-header">
      <tr>
        {columns.map((column) => (
          <th
            data-testid="table-header1"
            className="clickable"
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired, 
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default TableHeader;
