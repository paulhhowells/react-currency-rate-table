import React from 'react';
import { useFetchJson } from '../../hooks';

const currencyRatesUrl = 'api/rates.json';

export default function CurrencyRateTable () {
  const { json, loading } = useFetchJson(currencyRatesUrl);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>
  }
  else if (json) {
    const { rates } = json;



    return (
      <table>
      {
        rows && rows.map((row) => (
          <tr key={row.key}>
            <td></td>
            <td></td>
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
