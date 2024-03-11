import './App.css';
import { createHashHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router-dom';
import AppLayout from './modules/Layouts/AppLayout';
import Routes from './Routes';
import Localization from './modules/common/Localization';

const appCode = 'CZ/';

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const history = createHashHistory({ basename: appCode });

  return (
    <Router history={history}>
      <Localization>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Localization>
    </Router>
  );
}

export default App;
