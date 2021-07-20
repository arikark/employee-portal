import React from 'react';
import clsx from 'clsx';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import DefaultIcon from '@material-ui/icons/FileCopy';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    selected: {
      transition: 'box-shadow',
      transitionDuration: '1s',
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`,
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    listItemDisabled: {
      cursor: 'not-allowed',
    },
  })
);

// functional component
const MenuItem = (route) => {
  const classes = useStyles();
  const location = useLocation();
  const handleNavigate = (e) => {
    if (!route.enabled) e.preventDefault();
  };

  return (
    <>
      <NavLink
        to={`${route.path}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
        onClick={handleNavigate}
        className={clsx({
          [classes.listItemDisabled]: !route.enabled,
        })}
      >
        <Tooltip title={route.tooltip || ''} placement="right">
          <ListItem button disabled={!route.enabled}>
            <ListItemIcon>
              <IconButton
                className={clsx({
                  [classes.selected]: location.pathname === route.path,
                })}
                size="small"
              >
                <Icon component={route.icon || DefaultIcon} />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        </Tooltip>
      </NavLink>
    </>
  );
};

export default MenuItem;
