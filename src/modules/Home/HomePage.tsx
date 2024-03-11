import { useIntl } from 'react-intl';
import Page from '../Layouts/Page';
import translations from './translations';

export default function HomePage() {
  const { formatMessage } = useIntl();
  return <Page title={formatMessage(translations.title)}>This is home page</Page>;
}
