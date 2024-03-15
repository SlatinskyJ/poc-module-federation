import React from 'react';
import ELanguage from '../models/ELanguage';
import ILanguage from '../models/ILanguage';

export const appLanguages: Record<string, ILanguage> = {
  [ELanguage.cs]: { id: 1, code: ELanguage.cs, name: 'Čeština' },
  [ELanguage.en]: { id: 2, code: ELanguage.en, name: 'English' },
};

export const DEFAULT_LANGUAGE = ELanguage.en;

export interface ILanguageContext {
  languages: Record<string, ILanguage>;
  currentLanguage: ELanguage;
  defaultLanguage: ELanguage;
  toggleLanguage: (language: ELanguage) => void;
}

export const ChangeLanguageContext = React.createContext<ILanguageContext>({
  languages: appLanguages,
  currentLanguage: ELanguage.en,
  defaultLanguage: DEFAULT_LANGUAGE,
  toggleLanguage: () => undefined,
});

export const useLanguageContext = () => React.useContext(ChangeLanguageContext);
