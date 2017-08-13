import test from 'ava';
import { reducerTest } from 'redux-ava';
import appReducer, { getShowAddPost } from '../AppReducer';
import { toggleAddPost } from '../AppActions';

test('action for TOGGLE_ADD_POST is working', reducerTest(
  appReducer,
  { showAddPost: false },
  toggleAddPost(),
  { showAddPost: true },
));

test('default (not recognized action) is changing nothng', reducerTest(
  appReducer,
  { showAddPost: false },
  { type: 'DUMMY_ACTION_THAT_CONNOT_HAPPEN' },
  { showAddPost: false },
));

test('getShowAddPost selector', (t) => {
  t.is(getShowAddPost({
    app: { showAddPost: false },
  }), false);
});
