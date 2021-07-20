import { memo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// components

// app routes
import { privateRoutes, publicRoutes } from '../config/index';
import PrivateRoute from '../modules/PrivateRoute';
import PublicRoute from '../modules/PublicRoute';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AppLayout from './AppLayout';

const renderPrivateRoutes = () => {
  console.log('renderprivaterroutes');
  return privateRoutes.map((route) =>
    route.subRoutes ? (
      route.subRoutes.map((item) => (
        <PrivateRoute
          path={`${item.path}`}
          component={item.component}
          key={`${item.key}`}
          exact
        />
      ))
    ) : (
      <PrivateRoute
        component={route.component}
        key={`${route.key}`}
        path={`${route.path}`}
        exact
      />
    )
  );
};

const renderPublicRoutes = () => {
  return publicRoutes.map((route) => (
    <PublicRoute key={`${route.key}`} path={`${route.path}`} exact>
      {route.component}
    </PublicRoute>
  ));
};

const Routes = ({ children }) => {
  // default component
  const DefaultComponent = () => <div>{`No Component Defined.`}</div>;
  console.log('map');
  return (
    <Router>
      <Switch>
        {renderPublicRoutes()}
        <AppLayout>{renderPrivateRoutes()}</AppLayout>
        <Route component={DefaultComponent} />
      </Switch>
    </Router>
  );
};

export default memo(Routes);
