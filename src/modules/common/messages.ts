import { ELanguage } from './models';

import commonMessagesCs from './translations/cs.json';
import commonMessagesEn from './translations/en.json';
import filesMessagesCs from '../Files/translations/cs.json';
import filesMessagesEn from '../Files/translations/en.json';
import homeMessagesCs from '../Home/translations/cs.json';
import homeMessagesEn from '../Home/translations/en.json';
import teamMessagesCs from '../Team/translations/cs.json';
import teamMessagesEn from '../Team/translations/en.json';
import userMessagesCs from '../User/translations/cs.json';
import userMessagesEn from '../User/translations/en.json';

export const messages: Record<string, Record<string, string>> = {
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
};
