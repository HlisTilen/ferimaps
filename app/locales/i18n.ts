import I18n from 'react-native-i18n';

import {en} from './en';
import {sl} from './sl';

I18n.fallbacks = true;

I18n.translations = {
    en,
    sl
};

export function t(name, params = {}) {
    return I18n.t(name, params);
}

