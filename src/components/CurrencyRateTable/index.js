import React from 'react';
import { useFetchJson } from '../../hooks';
import tableSort from './tableSort';

const currencyRatesUrl = 'api/rates.json';

export default function CurrencyRateTable () {
  const { json, loading } = useFetchJson(currencyRatesUrl);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>
  }
  else if (json) {
    const { rates } = json;

    const rows = Object.entries(rates).map(row => {
      const [ currency, rate ] = row;
      return { currency, rate };
    });

    const sortedRows = tableSort(rows, 'currencyAscending');

    return (
      <table>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Rate</th>
        </tr>
        {
          sortedRows.map((row) => (
            <tr key={ row.currency }>
              <td>{ row.currency }</td>
              <td>{ row.rate }</td>
            </tr>
          ))
        }
      </table>
    );
  } else {
    // TODO: test & handle errors
    return (<div>Error! Cannot load</div>);
  }
}
