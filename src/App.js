import React from 'react';
import { connect } from 'react-redux';

import { removeCurrency, addCurrency, fetchCurrency } from './redux/actions';

const App = ({
  currencies,
  dispatch
}) => {
  React.useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  
  const removeButton = (currency, i) => (
    <button
      key={i}
      className="btn-primary"
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(removeCurrency(currency))}
    >
      Remove
    </button>
  );

  const dropdownItems = (currency, i) => (
    <li
      key={i}
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(addCurrency(currency))}
    >
      {currency.name}
    </li>
  );

  const visibleCurrencies = currencies.filter((currency) => currency.show);
  const hiddenCurrencies = currencies.filter((currency) => !currency.show);

  return (
    <div className="container">
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>
          Other Currencies
          <span className="caret"></span>
        </button>
        
        {dropdownOpen &&
          <ul>
            {hiddenCurrencies.map((currency, i) => dropdownItems(currency, i))}
          </ul>
         }
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Symbol
            </th>
            <th>
              CMC Rank
            </th>
            <th>
              Price (USD)
            </th>
            <th/>
          </tr>
        </thead>

        <tbody>
          {visibleCurrencies?.map((currency, i) => {
            return (
              <tr key={i}>
                <td>
                  {currency.name}
                </td>
                <td>
                  {currency.symbol}
                </td>
                <td>
                  {currency.rank}
                </td>
                <td>
                  {currency.price?.USD.price.toFixed(2)}
                </td>
                <td>
                  {visibleCurrencies.length > 1 && removeButton(currency, i)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies
  };
};

export default connect(mapStateToProps)(App);
