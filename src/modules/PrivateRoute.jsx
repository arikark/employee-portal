import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = true;

function PrivateRoute({ children, ...rest }) {
  console.log('private route');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
