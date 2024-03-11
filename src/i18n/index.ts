import I18n, {t} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import tr from './tr';
import en from './en';
import AsyncStorage from '@react-native-async-storage/async-storage';
const locales = RNLocalize.getLocales();
export const isRtl = locales[0].isRTL;
AsyncStorage.getItem('@LANGUAGE').then(session => {
  if (session !== null) {
    I18n.locales.no = session;
    I18n.locale = session;
  } else {
    I18n.locales.no = 'tr';
    I18n.locale = 'tr';
  }
});
I18nManager.forceRTL(isRtl);
I18n.fallbacks = true;
I18n.translations = {
  en,
  tr,
};
export {t};
export type I18nType = keyof typeof en;
