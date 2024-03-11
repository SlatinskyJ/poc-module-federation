import { Select } from 'antd';
import React from 'react';
import { useLanguageContext } from './contexts/ChangeLanguageContext';
import { ELanguage } from './models';

export default function LanguageSelect() {
  const { languages, defaultLanguage, toggleLanguage } = useLanguageContext();

  const handleChange = (value: ELanguage) => {
    toggleLanguage(value);
  };

  const languageOptions = Object.keys(languages).map((key) => ({
    label: languages[key].name,
    value: languages[key].code,
    disabled: languages[key].disabled,
  }));

  return (
    <Select<ELanguage>
      defaultValue={defaultLanguage}
      style={{ width: 120, marginRight: 16 }}
      onChange={handleChange}
      options={languageOptions}
    />
  );
}
