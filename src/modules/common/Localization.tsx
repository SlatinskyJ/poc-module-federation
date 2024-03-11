import React, { useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { appLanguages, ChangeLanguageContext, DEFAULT_LANGUAGE } from './contexts/ChangeLanguageContext';
import messages from './messages';
import ELanguage from './models/ELanguage';

export default function Localization({ children }: React.PropsWithChildren<object>) {
  const [currentLanguage, setCurrentLanguage] = useState<ELanguage>(ELanguage.en);

  const toggleLanguage = (language: ELanguage) => {
    setCurrentLanguage(language);
  };

  const languageContextValue = useMemo(
    () => ({
      languages: appLanguages,
      currentLanguage,
      defaultLanguage: DEFAULT_LANGUAGE,
      toggleLanguage,
    }),
    [currentLanguage],
  );

  return (
    <ChangeLanguageContext.Provider value={languageContextValue}>
      <IntlProvider locale={currentLanguage} messages={messages[currentLanguage]}>
        {children}
      </IntlProvider>
    </ChangeLanguageContext.Provider>
  );
}
