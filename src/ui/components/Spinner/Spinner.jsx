import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    '& > * + *': {
      marginLeft: theme.spacing(5),
    },
  },
}));

function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <CircularProgress color="secondary" />
    </div>
  );
}
export default CircularIndeterminate;
