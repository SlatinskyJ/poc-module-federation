import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import Page from '@slatinsky/shared';
import translations from './translations';

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useIntl();
  return <Page title={`${formatMessage(translations.title)} - ${id}`}>This is user page</Page>;
}
