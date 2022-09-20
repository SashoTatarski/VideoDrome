import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table" data-testid="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}        
      />
      <TableBody data={data} columns={columns} testId="table-body" />
    </table>
  );
};

export default Table;
