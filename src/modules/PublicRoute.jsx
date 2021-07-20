import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/auth/slice';

function PublicRoute({ children, ...rest }) {
  const currentUser = useSelector(selectCurrentUser);
  console.log('public route');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !currentUser.signedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PublicRoute;
