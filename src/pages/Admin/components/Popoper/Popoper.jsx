import React from "react";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import useStyles from './PopoperStyled';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../../../store/users';
import { useFormik } from 'formik';
import { StyledForm, StyledInput, StyledButton } from './PopoperStyled';
import { getOneUser } from '../../../../api/adminRequests'

function AdminPopper() {
  const allUsers = useSelector((state) => (state.users.allUsers));
  const users = allUsers;

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
    // initialValues: {
    //   id: 'id',
    //   userName: 'userName',
    //   email: 'email',
    //   roleId: 'roleId',
    //   createdAt: 'createdAt',
    // },
    onSubmit: () => {
    },
  })

  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={450}>
            <Paper className={classes.paper}>
              <Typography className={classes.typography}>
                The user information
              </Typography>
              <StyledForm
                className="form-data"
                method="POST"
                onSubmit={handleSubmit}
              > 
                {users.map(({ id, userName, email, roleId, createdAt }) =>
                  <>
                  <input placeholder={`id:${id}`} />
                  <input placeholder={`userName:${userName}`} />
                  <input placeholder={`email:${email}`} />
                  <input placeholder={`roleId:${roleId}`} />
                  <input placeholder={`createdAt:${createdAt}`} />
                  </>
                )}
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
                // <StyledInput
                //   type="text"
                //   name="id"
                //   onChange={handleChange}
                //   value={values.id}
                // />
                // <StyledInput
                //   type="text"
                //   name="userName"
                //   onChange={handleChange}
                //   value={values.userName}
                // />
                // <StyledInput
                //   type="text"
                //   name="email"
                //   onChange={handleChange}
                //   value={values.email}
                // />
                // <StyledInput
                //   type="text"
                //   name="roleId"
                //   onChange={handleChange}
                //   value={values.roleId}
                // />
                // <StyledInput
                //   type="text"
                //   name="createdAt"
                //   onChange={handleChange}
                //   value={values.createdAt}
                // />

                