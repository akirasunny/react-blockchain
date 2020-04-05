import React from 'react';
import {
  Table,
  Dropdown,
  Button
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeCurrency, addCurrency, fetchCurrency } from './redux/actions';

const App = ({
  currencies,
  dispatch
}) => {
  React.useEffect(() => {
    dispatch(fetchCurrency());
    return null;
  }, []);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  
  const removeButton = (currency, i) => (
    <button
      key={i}
      className="btn-primary"
      onClick={() => dispatch(removeCurrency(currency))}
    >
      Remove
    </button>
  );

  const dropdownItems = (currency, i) => (
    <li
      key={i}
      onClick={() => dispatch(addCurrency(currency))}
    >
      {currency.index}
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

      <Table celled>
        <Table.Body>
          {visibleCurrencies?.map((currency, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  {currency.index}
                </Table.Cell>

                <Table.Cell>
                  {visibleCurrencies.length > 1 && removeButton(currency, i)}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies
  };
};

export default connect(mapStateToProps)(App);
