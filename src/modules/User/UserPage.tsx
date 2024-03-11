import { useParams } from 'react-router';
import Page from '../AppLayout/Page';

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  return <Page title={`User -${id}`}>This is user page</Page>;
}
