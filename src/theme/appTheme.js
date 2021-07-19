import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

// define light theme colors
export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: blue[800],
    },
    secondary: {
      main: pink[300],
    },
  },
});
