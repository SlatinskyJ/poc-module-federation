import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import Page from '../Layouts/Page';
import translations from './translations';

export default function TeamPage() {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useIntl();
  return <Page title={`${formatMessage(translations.title)} - ${id}`}>This is team page</Page>;
}
