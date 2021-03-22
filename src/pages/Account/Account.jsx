import React from 'react';
import Navigation from '../../ui/containers/Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// const CenteredTabs = () => {
//   const classes = useStyles();
// };
// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };

function Account(classes,value) {
  return (
    <>
      <Navigation />
      <Paper className={classes.root}>
        <Tabs
          value={value}

          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
  

    </>
  );
};

export default Account;