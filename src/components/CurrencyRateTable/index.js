import React, { useState } from 'react';
import { useFetchJson } from '../../hooks';

const currencyRatesUrl = 'api/rates.json';

/**
    "success": true,
    "timestamp": 1530089887,
    "base": "EUR",
    "date": "2018-06-27",
    "rates": {
        "AED": 4.271175,

 */
export default function CurrencyRateTable () {
  const { json, loading } = useFetchJson(currencyRatesUrl);

  if (loading) {
    return <React.Fragment>Loading...</React.Fragment>
  }
  else if (json) {
    const { rates } = json;
    console.log('rates', rates);

    const rows = [{}, {}, {}];
    // object -> array

    // let rows = [];
    // for (let [key, value] of Object.entries(rates)) {
    // }
    // for (const property in object) {



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
