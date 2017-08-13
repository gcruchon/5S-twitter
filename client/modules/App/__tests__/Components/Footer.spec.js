import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

test('renders the footer properly', (t) => {
  const wrapper = shallow(
    <Footer />
  );

  t.is(wrapper.find('footer').length, 1);
  t.is(wrapper.find('footer > hr').length, 1);
  t.is(wrapper.find('footer > p').length, 1);
  t.is(wrapper.find('footer > p').first().html(), '<p>© 2017 · <a href="https://twitter.com/@gcruchon" target="_blank" rel="noopener noreferrer">Gilles CRUCHON</a></p>');
});
