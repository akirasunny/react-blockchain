import React from 'react';
import {
  Table,
  Dropdown,
  Button
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { removeCurrency } from './redux/actions';

const App = ({
  currencies,
  dispatch
}) => {
  const removeButton = (currency) => (
    <button
      className="btn-primary"
      onClick={() => dispatch(removeCurrency(currency))}
    >
      Remove
    </button>
  );

  return (
    <div className="container">
      <Table celled>
        <Table.Body>
          {currencies?.map((currency, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  {currency.index}
                </Table.Cell>
                <Table.Cell>
                  {currency.show.toString()}
                </Table.Cell>
                <Table.Cell>
                {currency.show && removeButton(currency)}
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
    currencies: [...state.currencies]
  };
};

export default connect(mapStateToProps)(App);
