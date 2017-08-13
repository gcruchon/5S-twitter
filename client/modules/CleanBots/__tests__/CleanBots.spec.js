import React from 'react';
import test from 'ava';
import { FormattedMessage } from 'react-intl';
import { shallowWithIntl } from '../../../util/react-intl-test-helper';
import CleanBots from '../CleanBots';

test('renders CleanBots properly', (t) => {
  const wrapper = shallowWithIntl(
    <CleanBots />
  );

  t.is(wrapper.find('h1').length, 1);
  t.truthy(wrapper.find('h1').first().containsMatchingElement(<FormattedMessage id="cleanBotsTitle" />));
});
