import './App.css';
import Page from '@slatinsky/shared/src/components/Page';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import translations from './translations';

function UserModule() {
  const { formatMessage } = useIntl();
  const [count, setCount] = useState(0);
  return (
    <Page title={formatMessage(translations.title)}>
      This is user module with new content
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </Button>
    </Page>
  );
}

export default UserModule;
