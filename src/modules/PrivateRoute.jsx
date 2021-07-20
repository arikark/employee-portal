import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/auth/slice';

function PrivateRoute({ children, ...rest }) {
  const currentUser = useSelector(selectCurrentUser);
  console.log('private route');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser.signedIn ? (
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