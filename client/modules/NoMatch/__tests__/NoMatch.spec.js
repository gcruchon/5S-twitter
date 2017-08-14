import React from 'react';
import test from 'ava';
import { FormattedMessage } from 'react-intl';
import { shallowWithIntl } from '../../../util/react-intl-test-helper';
import NoMatch from '../NoMatch';

test('renders NoMatch properly', (t) => {
  const wrapper = shallowWithIntl(
    <NoMatch />
  );

  t.is(wrapper.find('h1').length, 1);
  t.truthy(wrapper.find('h1').first().containsMatchingElement(<FormattedMessage id="noMatchTitle" />));
});
