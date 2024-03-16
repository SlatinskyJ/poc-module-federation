import { Breadcrumb, Flex, Layout, Menu, MenuProps, theme } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import LanguageSelect from '../common/LanguageSelect';

import commonTranslations from '../common/translations';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, children?: MenuItem[]): MenuItem {
  return {
    key,
    children,
    label,
  } as MenuItem;
}

const useItems = (): MenuItem[] => {
  const { formatMessage } = useIntl();
  return [
    getItem(formatMessage(commonTranslations.home), 'home'),
    getItem(formatMessage(commonTranslations.user), 'user', [
      getItem('Tom', 'tom'),
      getItem('Bill', 'bill'),
      getItem('Alex', 'alex'),
    ]),
    getItem(formatMessage(commonTranslations.team), 'team', [getItem('Team 1', '1'), getItem('Team 2', '2')]),
    getItem(formatMessage(commonTranslations.files), 'files'),
  ];
};

export default function AppLayout({ children }: React.PropsWithChildren<object>) {
  const [collapsed, setCollapsed] = useState(false);
  const [urlPath, setUrlPath] = useState<string[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const history = useHistory();
  const items = useItems();

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
        <Menu theme="dark" mode="inline" items={items} onClick={handleMenuChange} selectedKeys={urlPath} />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex style={{ justifyContent: 'space-between' }} align="center">
            <Breadcrumb style={{ margin: '16px' }} items={breadcrumbs} />
            <LanguageSelect />
          </Flex>
        </Layout.Header>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Layout.Content style={{ margin: '0 16px' }}>{children}</Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          POC for module federation ©2024 Created by Jakub Slatinsky
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}
