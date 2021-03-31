import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { useFormik } from 'formik';
import { StyledForm, StyledInput, StyledButton } from './PopoperStyled'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing(5),
    margin: '0 auto'
  }
}));

function AdminPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const { handleSubmit, handleChange, values } = useFormik({

    initialValues: {
      userName: 'userName',
      email: 'email',
      roleId: 'roleId',
      createdAt: 'createdAt',
    },

    onSubmit: () => {

    }
  })
  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>
                The user information
              </Typography>
              <StyledForm
                className="form-data"
                method="POST"
                onSubmit={handleSubmit}
              >
                <StyledInput
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  value={values.userName}
                />
                <StyledInput
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <StyledInput
                  type="text"
                  name="roleId"
                  onChange={handleChange}
                  value={values.roleId}
                />
                <StyledInput
                  type="text"
                  name="createdAt"
                  onChange={handleChange}
                  value={values.createdAt}
                />
                <StyledButton type='submit'>Save changes</StyledButton>
              </StyledForm>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justify="center">
        <Grid item>
          <Button onClick={handleClick("right")}>change info</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminPopper;
