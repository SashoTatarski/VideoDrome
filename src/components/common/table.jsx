import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';
import PropTypes from 'prop-types';

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

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
