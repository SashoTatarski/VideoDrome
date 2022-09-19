import _ from 'lodash';
import React from 'react';

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    const result = _.get(item, column.path);
    console.log(result);
    return result;
  };

  return (
    <tbody>
      {data.map((item) => (
        <tr>
          {columns.map((column) => (
            <td>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
