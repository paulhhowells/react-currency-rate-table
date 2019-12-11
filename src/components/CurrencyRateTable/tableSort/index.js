const SORTING = {
  currencyAscending,
  currencyDescending,
  rateAscending,
  rateDescending,
};

export default function tableSort (
  rows,
  sortType='currencyAscending',
) {
  const sort = SORTING[sortType];
  const sortedRows = [...rows].sort(sort);

  return sortedRows;
}

export function currencyAscending (a, b) {
  return a.currency.localeCompare(b.currency);
}

export function currencyDescending (a, b) {
  return b.currency.localeCompare(a.currency);
}

export function rateAscending (a, b) {
  if (a.rate === b.rate) {
    return a.currency.localeCompare(b.currency);
  }

  return Number(a.rate) - Number(b.rate);
}

export function rateDescending (a, b) {
  if (a.rate === b.rate) {
    return a.currency.localeCompare(b.currency);
  }

  return Number(b.rate) - Number(a.rate);
}
