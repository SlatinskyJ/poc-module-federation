import './App.css';
import { createHashHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import AppLayout from './modules/AppLayout/AppLayout';
import Routes from './Routes';

const appCode = 'CZ/';

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const history = createHashHistory({ basename: appCode });

  return (
    <Router history={history}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
}

export default App;
