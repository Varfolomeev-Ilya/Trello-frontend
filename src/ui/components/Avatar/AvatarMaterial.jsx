import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: '0 auto',
      marginBottom: '20px'
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
    </div>
  );
}

export default ImageAvatars;