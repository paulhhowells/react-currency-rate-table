import React, { useState } from 'react';
import { useFetchJson } from '../../hooks';
import tableSort from './tableSort';
import { DataRow } from './components';

const currencyRatesUrl = 'api/rates.json';

export default function CurrencyRateTable () {
  const { json, loading } = useFetchJson(currencyRatesUrl);
  const [ sortType, setSortType ] = useState('currencyAscending');

  function handleSortToggle (toggleType) {
    let newSortType = '';

    if (toggleType === 'rate') {
      newSortType = (sortType === 'rateAscending')
        ? 'rateDescending'
        : 'rateAscending';
    } else {
      newSortType = (sortType === 'currencyAscending')
        ? 'currencyDescending'
        : 'currencyAscending';
    }

    setSortType(newSortType);
  }

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>
  } else if (json) {
    const { rates } = json;

    const rows = Object.entries(rates).map(row => {
      const [ currency, rate ] = row;

      return { currency, rate };
    });

    const sortedRows = tableSort(rows, sortType);

    return (
      <table>
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => handleSortToggle('currency')}>
              Currency
            </th>
            <th
              scope="col"
              onClick={() => handleSortToggle('rate')}>
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
        {
          sortedRows.map(row => <DataRow key={row.currency} row={row} />)
        }
        </tbody>
      </table>
    );
  } else {
    // TODO: test & handle errors
    return (<div>Error! Cannot load</div>);
  }
}
