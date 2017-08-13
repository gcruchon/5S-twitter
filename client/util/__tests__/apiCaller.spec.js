import test from 'ava';
import nock from 'nock';
import callApi, { API_URL } from '../apiCaller';


test('method defaults to GET', async (t) => {
  const reply = { foo: 'bar' };
  nock(API_URL)
    .get('/foo')
    .reply(200, reply);

  t.deepEqual(await callApi('foo'), reply);
});

test('sends the body', async (t) => {
  const body = { id: 5 };
  const reply = { foo: 'bar' };
  nock(API_URL)
    .post('/foo', body)
    .reply(200, reply);
  t.deepEqual(await callApi('foo', 'post', body), reply);
});

test('returns the error', async (t) => {
  const reply = { message: 'Errrrrrrrrr' };
  nock(API_URL)
    .get('/send_error')
    .reply(500, reply);
  t.deepEqual(await callApi('send_error'), reply);
});
