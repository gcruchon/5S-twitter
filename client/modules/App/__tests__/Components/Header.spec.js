import React from 'react';
import test from 'ava';
import { FormattedMessage } from 'react-intl';
import Header from '../../components/Header/Header';
import { shallowWithIntl } from '../../../../util/react-intl-test-helper';

test('renders the header properly', (t) => {
  const wrapper = shallowWithIntl(<Header />);

  t.is(wrapper.find('nav').length, 1);
  t.truthy(wrapper.find('Link').first().containsMatchingElement(<FormattedMessage id="siteTitle" />));
  t.truthy(wrapper.find('ul > li > Link').at(0).containsMatchingElement(<FormattedMessage id="menuCleanBots" />));
  t.truthy(wrapper.find('ul > li > Link').at(1).containsMatchingElement(<FormattedMessage id="menuManageLists" />));
});
