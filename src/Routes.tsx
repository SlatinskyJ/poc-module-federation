import { Redirect, Route, Switch } from 'react-router-dom';
import FilePage from './modules/Files/FilePage';
import HomePage from './modules/Home/HomePage';
import TeamPage from './modules/Team/TeamPage';
import UserPage from './modules/User/UserPage';

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
        <UserPage />
      </Route>
      <Route path="/team/:id">
        <TeamPage />
      </Route>
      <Route path="/files">
        <FilePage />
      </Route>
    </Switch>
  );
}
