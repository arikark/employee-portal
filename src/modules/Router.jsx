import { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

const DefaultComponent = () => <div>{`No Component Defined.`}</div>;

const Routes = ({ children }) => {
  // default component
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
