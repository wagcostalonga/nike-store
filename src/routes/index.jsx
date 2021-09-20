import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Bag from '../pages/Bag';
import RoutePrivate from './private';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <RoutePrivate path="/main" component={Main} />
      <RoutePrivate path="/bag" component={Bag} />
    </Switch>
  );
}
