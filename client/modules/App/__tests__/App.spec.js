import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from '../App';
import { mountWithIntl, intl } from '../../../util/react-intl-test-helper';

const children = <h1>Test</h1>;
const dispatch = sinon.spy();
const props = {
  children,
  dispatch,
};

test('renders properly', (t) => {
  const wrapper = shallow(
    <App {...props} />
  );

  // t.is(wrapper.find('Helmet').length, 1);
  t.is(wrapper.find('Header').length, 1);
  t.is(wrapper.find('Center').length, 1);
  t.is(wrapper.find('Footer').length, 1);
  t.truthy(wrapper.find('Header + div').children(), children);
});

test('calls componentDidMount', (t) => {
  sinon.spy(App.prototype, 'componentDidMount');
  mountWithIntl(
    <MemoryRouter>
      <App {...props} />
    </MemoryRouter>);

  t.truthy(App.prototype.componentDidMount.calledOnce);
  App.prototype.componentDidMount.restore();
});

test('mapPropsToState deals with intl', (t) => {
  const state = { intl };
  const output = mapStateToProps(state);
  t.deepEqual(output.intl, intl);
});
