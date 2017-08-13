import React from 'react';
import test from 'ava';
import { FormattedMessage } from 'react-intl';
import { shallowWithIntl } from '../../../util/react-intl-test-helper';
import Home from '../Home';

test('renders Home properly', (t) => {
  const wrapper = shallowWithIntl(
    <Home />
  );

  t.is(wrapper.find('h1').length, 1);
  t.truthy(wrapper.find('h1').first().containsMatchingElement(<FormattedMessage id="homeTitle" />));
});
