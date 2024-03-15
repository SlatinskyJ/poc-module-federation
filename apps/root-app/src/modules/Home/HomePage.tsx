import { useIntl } from 'react-intl';
import Page from '@slatinsky/shared/src/components/Page';
import translations from './translations';

export default function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <Page title={formatMessage(translations.title)}>
      <div>This is home page</div>
    </Page>
  );
}
