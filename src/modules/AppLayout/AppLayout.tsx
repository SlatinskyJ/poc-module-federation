import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, children?: MenuItem[]): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', 'home'),
  getItem('User', 'user', [getItem('Tom', 'tom'), getItem('Bill', 'bill'), getItem('Alex', 'alex')]),
  getItem('Team', 'team', [getItem('Team 1', '1'), getItem('Team 2', '2')]),
  getItem('Files', 'files'),
];

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);
  const [urlPath, setUrlPath] = useState<string[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const history = useHistory();

  const selectedItems = history.location.pathname.split('/').filter((s: string) => s !== '');
  const breadcrumbs = selectedItems.map((item: string) => ({ key: item, title: item }));

  const handleMenuChange = ({ keyPath }: { keyPath: string[] }) => {
    const url = keyPath.reduceRight((prev, curr) => `${prev}/${curr}`, '');
    setUrlPath(keyPath);
    history.push(url);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value: boolean) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} onClick={handleMenuChange} selectedKeys={urlPath} />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb style={{ margin: '16px' }} items={breadcrumbs} />
        </Layout.Header>
        <Layout.Content style={{ margin: '0 16px' }}>{children}</Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          POC for module federation ©2024 Created by Jakub Slatinsky
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
