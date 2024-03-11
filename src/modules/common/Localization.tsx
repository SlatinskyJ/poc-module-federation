import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { appLanguages, ChangeLanguageContext, DEFAULT_LANGUAGE } from './contexts/ChangeLanguageContext';
import { messages } from './messages';
import { ELanguage } from './models';

export default function Localization({ children }: React.PropsWithChildren) {
  const [currentLanguage, setCurrentLanguage] = useState<ELanguage>(ELanguage.en);

  const toggleLanguage = (language: ELanguage) => {
    setCurrentLanguage(language);
  };

  const languageContextValue = {
    languages: appLanguages,
    currentLanguage,
    defaultLanguage: DEFAULT_LANGUAGE,
    toggleLanguage,
  };

  return (
    <ChangeLanguageContext.Provider value={languageContextValue}>
      {/*@ts-ignore*/}
      <IntlProvider locale={currentLanguage} messages={messages[currentLanguage]}>
        {children}
      </IntlProvider>
    </ChangeLanguageContext.Provider>
  );
}
