import { useIntl } from 'react-intl';
import Page from '@slatinsky/shared/src/components/Page';

import translations from './translations';

export default function FilePage() {
  const { formatMessage } = useIntl();
  return <Page title={formatMessage(translations.title)}>This is file page</Page>;
}
