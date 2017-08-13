import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import ManageLists from '../ManageLists';

test('renders ManageLists properly', (t) => {
  const wrapper = shallow(
    <ManageLists />
  );

  t.is(wrapper.find('h1').length, 1);
  t.is(wrapper.find('h1').first().text(), 'Manage your lists');
});
