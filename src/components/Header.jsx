import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/AccountCircle';
import { signOut } from '../store/auth/slice';
import { useDispatch } from 'react-redux';

// constants
import { APP_TITLE, DRAWER_WIDTH } from '../utils/constants';

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
  })
);

const Header = ({ open, toggle }) => {
  const classes = useStyles();
  const authDispatch = useDispatch();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <IconButton
              color="inherit"
              aria-label="open menu"
              onClick={toggle}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
              size="small"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {APP_TITLE}
            </Typography>
          </div>
          <IconButton
            size="small"
            color="inherit"
            onClick={() => authDispatch(signOut())}
          >
            <UserIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
