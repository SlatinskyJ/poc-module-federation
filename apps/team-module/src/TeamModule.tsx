import './App.css';
import Page from '@slatinsky/shared/src/components/Page';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import translations from './translations';

export default function TeamModule() {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useIntl();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Number(id));
  }, [id]);
  return (
    <Page title={formatMessage(translations.title)}>
      This is team module with new content
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
