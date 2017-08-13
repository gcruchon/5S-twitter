import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import CleanBots from '../CleanBots';

test('renders CleanBots properly', (t) => {
  const wrapper = shallow(
    <CleanBots />
  );

  t.is(wrapper.find('h1').length, 1);
  t.is(wrapper.find('h1').first().text(), 'Get rid of bots!');
});
