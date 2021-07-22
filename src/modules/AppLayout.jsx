import { useReducer, memo } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// components
import Header from './Header';
import DrawerLeft from './DrawerLeft';
import Footer from '../components/Footer';

// constants
import { DRAWER_WIDTH, FOOTER_HEIGHT } from '../utils/constants';

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.background.paper,
    },
    content: {
      flex: 1,
      padding: theme.spacing(3),
      minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      background: theme.palette.background.paper,
      marginTop: -111,
      marginLeft: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: DRAWER_WIDTH,
    },
  })
);

// functional component
const AppLayout = ({ children }) => {
  const classes = useStyles();
  const [open, toggle] = useReducer((open) => !open, false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} toggle={toggle} />
      <DrawerLeft open={open} toggle={toggle} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.toolbar} />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default memo(AppLayout);
