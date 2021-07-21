import { memo } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// components

// app routes
import { privateRoutes, publicRoutes } from '../config/index';
import PrivateRoute from '../modules/PrivateRoute';
import PublicRoute from '../modules/PublicRoute';
import AppLayout from './AppLayout';

const renderPrivateRoutes = () => {
  console.log('renderprivaterroutes');
  return privateRoutes.map((route) =>
    route.subRoutes ? (
      route.subRoutes.map((item) => (
        <PrivateRoute key={`${item.key}`} path={`${item.path}`} exact>
          {item.component}
        </PrivateRoute>
      ))
    ) : (
      <PrivateRoute key={`${route.key}`} path={`${route.path}`} exact>
        {route.component}
      </PrivateRoute>
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

// const DefaultComponent = () => <div>{`No Component Defined.`}</div>;

const Routes = ({ children }) => {
  // default component
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/app">
          <AppLayout>{renderPrivateRoutes()}</AppLayout>
          <Redirect to="/app/home" />
        </PrivateRoute>
        {/* The main issue is that AppLayout (header and drawer) is rendered for the below 404 component when a URL is not matched */}
        <PublicRoute path="/">
          {renderPublicRoutes()}
          <Redirect to="/auth/signin" />
        </PublicRoute>
      </Switch>
    </Router>
  );
};

export default memo(Routes);
