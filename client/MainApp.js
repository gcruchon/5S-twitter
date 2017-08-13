/**
 * Root Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import IntlWrapper from './modules/Intl/IntlWrapper';
import { App } from './modules/App/App';

export default function MainApp(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <App />
      </IntlWrapper>
    </Provider>
  );
}

MainApp.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
