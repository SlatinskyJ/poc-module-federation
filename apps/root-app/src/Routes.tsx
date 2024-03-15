import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserModule from '@slatinsky/user-module/src/UserModule';
import TeamModule from '@slatinsky/team-module/src/TeamModule';
import FilePage from './modules/Files/FilePage';
import HomePage from './modules/Home/HomePage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/user/:id">
        <UserModule />
      </Route>
      <Route path="/team/:id">
        <TeamModule />
      </Route>
      <Route path="/files">
        <FilePage />
      </Route>
    </Switch>
  );
}
