import test from 'ava';
import { reducerTest } from 'redux-ava';
import intlReducer from '../IntlReducer';
import { switchLanguage } from '../IntlActions';
import { localizationData, enabledLanguages } from '../../../../Intl/setup';

test('action for SWITCH_LANGUAGE is working', reducerTest(
  intlReducer,
  { locale: 'en', enabledLanguages, ...localizationData.en },
  switchLanguage('en'),
  { locale: 'en', enabledLanguages, ...localizationData.en },
));


test('default (not recognized action) is changing nothng', reducerTest(
  intlReducer,
  { locale: 'en', enabledLanguages, ...localizationData.en },
  { type: 'DUMMY_ACTION_THAT_CONNOT_HAPPEN' },
  { locale: 'en', enabledLanguages, ...localizationData.en },
));
