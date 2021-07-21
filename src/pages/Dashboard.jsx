import React from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// components
import PageTitle from '../components/PageTitle';

// constants
import { APP_TITLE, PAGE_TITLE_DASHBOARD } from '../utils/constants';

// define css-in-js
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_DASHBOARD} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_DASHBOARD} />
      </div>
    </>
  );
};

export default Dashboard;
