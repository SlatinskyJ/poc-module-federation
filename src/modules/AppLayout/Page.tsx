import { Layout, theme } from 'antd';

export default function Page({ title, children }: React.PropsWithChildren<{ title: string }>) {
  const {
    token: { borderRadiusLG, colorFillSecondary },
  } = theme.useToken();
  return (
    <Layout>
      <Layout.Header style={{ borderRadius: borderRadiusLG, background: colorFillSecondary }}>{title}</Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}
