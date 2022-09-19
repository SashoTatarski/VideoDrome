import React from 'react';

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

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.path || column.key} onClick={() => raiseSort(column.path)}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
