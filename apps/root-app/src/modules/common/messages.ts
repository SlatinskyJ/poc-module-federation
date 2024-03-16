import teamMessagesCs from '@slatinsky/team-module/src/translations/cs.json';
import teamMessagesEn from '@slatinsky/team-module/src/translations/en.json';
import userMessagesCs from '@slatinsky/user-module/src/translations/cs.json';
import userMessagesEn from '@slatinsky/user-module/src/translations/en.json';
import filesMessagesCs from '../Files/translations/cs.json';
import filesMessagesEn from '../Files/translations/en.json';
import homeMessagesCs from '../Home/translations/cs.json';
import homeMessagesEn from '../Home/translations/en.json';
import ELanguage from './models/ELanguage';

import commonMessagesCs from './translations/cs.json';
import commonMessagesEn from './translations/en.json';

export default {
  [ELanguage.cs]: {
    ...commonMessagesCs,
    ...filesMessagesCs,
    ...homeMessagesCs,
    ...teamMessagesCs,
    ...userMessagesCs,
  },
  [ELanguage.en]: {
    ...commonMessagesEn,
    ...filesMessagesEn,
    ...homeMessagesEn,
    ...teamMessagesEn,
    ...userMessagesEn,
  },
} as Record<string, Record<string, string>>;
