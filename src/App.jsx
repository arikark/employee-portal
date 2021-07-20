import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// constants
import { APP_TITLE } from './utils/constants';

// define redux store
import { Provider } from 'react-redux';
import { store } from './store/store';

import { lightTheme } from './theme/appTheme';

import Routes from './modules/Router';

import amplifyConfigure from './amplify/amplifyConfigure';

amplifyConfigure();

function App() {
  // define custom theme
  let theme = createTheme(lightTheme);
  theme = responsiveFontSizes(theme);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
