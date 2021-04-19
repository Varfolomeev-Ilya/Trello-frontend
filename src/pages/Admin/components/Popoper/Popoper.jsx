import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import useStyles from './PopoperStyled';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { StyledForm, StyledButton } from './PopoperStyled';
import { updateUser } from '../../../../api/adminRequests';
import { setUsers } from '../../../../store/users';

function AdminPopper({ id }) {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => (state.users.allUsers));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();
  const currentUser = allUsers.find((user) => user.id === id);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      firstName: currentUser.firstName,
      createdAt: currentUser.createdAt,
      roleId: currentUser.roleId,
      email: currentUser.email,
      id: currentUser.id
    },
    
    onSubmit: async ({ firstName, createdAt, roleId, email, id }) => {
      try {
        const response = await updateUser(
          {
            firstName: firstName,
            createdAt: createdAt,
            roleId: roleId,
            email: email,
            id: id,
          });

        const newUsers = allUsers.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              firstName: response.data.firstName,
              createdAt: response.data.createdAt,
              lastname: response.data.lastname,
              roleId: response.data.roleId,
              email: response.data.email,
              id: response.data.id
            }
          }
          return item;
        });
        dispatch(setUsers(newUsers));
      } catch (error) {

        console.log(error)

          console.log(error)

      }
    },
  })
  console.log(values)
  return (
    <div className={classes.root}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={450}>
            <Paper className={classes.paper}>
              <Typography className={classes.typography}>
                The user information
              </Typography>
              <StyledForm
                className='form-data'
                method='POST'
                onSubmit={handleSubmit}
              >
                <>
                  <TextField className={classes.textField} color='secondary' label="id" variant="outlined" id='id' type='id' value={values.id} onChange={handleChange} onBlur={handleBlur} />
                  <TextField className={classes.textField} color='secondary' label="firstName" variant="outlined" id='firstName' type='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                  <TextField className={classes.textField} color='secondary' label="email" variant="outlined" id='email' type='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                  <TextField className={classes.textField} color='secondary' label="roleId" variant="outlined" id='roleId' type='roleId' value={values.roleId} onChange={handleChange} onBlur={handleBlur} />
                  <TextField className={classes.textField} color='secondary' label="createdAt" variant="outlined" id='createdAt' type='createdAt' value={values.createdAt} onChange={handleChange} onBlur={handleBlur} />
                </>
                <StyledButton type='submit' >Save changes</StyledButton>
              </StyledForm>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justify='center'>
        <Grid item>
          <Button onClick={handleClick('right')}>change info</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminPopper;