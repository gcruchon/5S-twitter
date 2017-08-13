import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

const IntlWrapper = (props) => {
  return (
    <IntlProvider {...props.intl} >
      {props.children}
    </IntlProvider>
  );
};

IntlWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  intl: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(IntlWrapper);
