import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import useStyles from './PopoperStyled';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { StyledForm, StyledButton, StyledInput, StyledP, StyledDiv } from './PopoperStyled';
import { updateUser } from '../../../../api/adminRequests';

function AdminPopper({id}) {
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
          { firstName: firstName,
            createdAt: createdAt,
            roleId: roleId,
            email: email,
            id: id,
          });
          console.log(response)
      }catch (error) {
        console.log(error)
      }
    },
  })


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
                  <StyledDiv>
                    <StyledP>id</StyledP>
                    <StyledInput id='id' type='id' value={values.id} onChange={handleChange} onBlur={handleBlur}/>
                  </StyledDiv>
                  <StyledDiv>
                  <StyledP>name</StyledP>
                  <StyledInput id='firstName' type='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                  </StyledDiv>
                  <StyledDiv>
                  <StyledP>email</StyledP>
                  <StyledInput id='email' type='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                  </StyledDiv>
                  <StyledDiv>
                  <StyledP>role</StyledP>
                  <StyledInput id='roleId' type='roleId' value={values.roleId} onChange={handleChange} onBlur={handleBlur}/>
                  </StyledDiv>
                  <StyledDiv>
                  <StyledP>created</StyledP>
                  <StyledInput id='createdAt' type='createdAt' value={values.createdAt} onChange={handleChange} onBlur={handleBlur}/>
                  </StyledDiv>
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