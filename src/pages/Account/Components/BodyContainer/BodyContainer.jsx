import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './BodyContainerStyles';
import Profile from '../ProfileContainer//Profile';
import UploadAvatar from '../Avatar/UploadAvatar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function BodyContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.bodyStyles}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.indicatorStyles}
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Edit profile' {...a11yProps(0)} />
          <Tab label='Upload your avatar' {...a11yProps(1)} />
          <Tab label='Settings' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        className={classes.swipeableViewsStyles}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <UploadAvatar />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default BodyContainer;