import { useParams } from 'react-router';
import Page from '../AppLayout/Page';

export default function TeamPage() {
  const { id } = useParams<{ id: string }>();
  return <Page title={`Team - ${id}`}>This is team page</Page>;
}
