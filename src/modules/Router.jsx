import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Layout from '../modules/Layout';

// app routes
import { privateRoutes } from '../config/index';
import SignIn from '../pages/Auth/SignIn';
import PrivateRoute from '../modules/PrivateRoute';

const Routes = ({ children }) => {
  // default component
  const DefaultComponent = () => <div>{`No Component Defined.`}</div>;
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/signin" component={SignIn} />
        {privateRoutes.map((route) =>
          route.subRoutes ? (
            route.subRoutes.map((item) => (
              <PrivateRoute path={`${item.path}`} key={`${item.key}`} exact>
                <Layout>{route.component || DefaultComponent}</Layout>
              </PrivateRoute>
            ))
          ) : (
            <PrivateRoute key={`${route.key}`} path={`${route.path}`} exact>
              <Layout>{route.component || DefaultComponent}</Layout>
            </PrivateRoute>
          )
        )}
        <Route component={DefaultComponent} />
      </Switch>
    </Router>
  );
};

export default Routes;
