import React from 'react';
import PropTypes from 'prop-types';

export const DataRow = ({ row, ...props }) => (
  <tr {...props}>
    <td key={ row.currency + 0 }>{ row.currency }</td>
    <td key={ row.currency + 1 }>{ row.rate }</td>
  </tr>
);

DataRow.propTypes = {
  row: PropTypes.object.isRequired,
};
