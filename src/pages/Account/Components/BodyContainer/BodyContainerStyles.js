import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    backgroundColor: '#f4f5f7'
  },
  bodyStyles: {
    width: '100%',
    height: 'auto'
  },
  swipeableViewsStyles: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },
  indicatorStyles: {
    color: '#b32020'
  }
}));

export default useStyles;
