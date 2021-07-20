import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Layout from '../modules/Layout';

// app routes
import { privateRoutes, publicRoutes } from '../config/index';
import PrivateRoute from '../modules/PrivateRoute';
import PublicRoute from '../modules/PublicRoute';

const Routes = ({ children }) => {
  // default component
  const DefaultComponent = () => <div>{`No Component Defined.`}</div>;
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route) => (
          <PublicRoute key={`${route.key}`} path={`${route.path}`} exact>
            {route.component || DefaultComponent}
          </PublicRoute>
        ))}
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
