import React from 'react';

const formatCurrency = (figure, currency = 'USD', separator = ',') => {
  const num = parseFloat(figure);
  const formattedNum = num.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
    useGrouping: true,
    groupingSeparator: separator
  });
  return formattedNum;
}

const Currency = ({ figure, currency, separator }) => {
  return (
    <span>
      {formatCurrency(figure, currency, separator)}
    </span>
  );
};

export default Currency;