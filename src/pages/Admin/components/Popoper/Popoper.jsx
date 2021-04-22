import React, { useState } from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import useStyles from './PopoperStyled';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import * as validation from '../../../../utils/validationConsts';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { StyledForm, StyledButton, StyledSpan } from './PopoperStyled';
import { updateUser } from '../../../../api/adminRequests';
import { setUsers } from '../../../../store/users';
import { deleteUser } from '../../../../api/adminRequests';
import { StyledMsg } from '../../../../ui/components/Message/MessageStyled';

function AdminPopper({ id }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
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

  const handleClose = () => {
    setOpen(false);
  }
  const handleDelete = async () => {
    try {
      const response = await deleteUser({ id });
      dispatch(setUsers(response.data))
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setTimeout(() => {
        setError(null);
        setOpen(false);
      },2000);
    }
  }

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: {
      firstName: currentUser.firstName,
      createdAt: currentUser.createdAt,
      roleId: currentUser.roleId,
      email: currentUser.email,
      id: currentUser.id
    },
    validationSchema: Yup.object({
      firstName:
        Yup
          .string()
          .trim()
          .min(validation.NAME_LENGTH, validation.NAME_LENGTH_MESSAGE)
          .matches(validation.NAME_MATCHES, validation.NAME_MATCHES_MESSAGE),
      createdAt:
        Yup
          .string()
          .trim()
          .min(validation.CREATEDAT_MIN_LENGTH, validation.CREATEDAT_LENGTH_MESSAGE)
          .max(validation.CREATEDAT_MAX_LENGTH, validation.CREATEDAT_LENGTH_MESSAGE)
          .matches(validation.CREATEDAT_MATCHES, validation.CREATEDAT_MATCHES_MESSAGE),
      roleId:
        Yup
          .string()
          .trim()
          .max(5)
          .matches(validation.NAME_MATCHES, validation.NAME_MATCHES_MESSAGE),
      email:
        Yup
          .string()
          .trim()
          .email()
          .max(validation.EMAIL_LENGTH, validation.EMAIL_LENGTH_MESSAGE)
          .matches(validation.EMAIL_MATCHES, validation.EMAIL_MATCHES_MESSAGE),
      id:
        Yup
          .string()
          .trim()
          .matches(validation.NUMB_MATCHES, validation.NUMB_MATCHES_MESSAGE),
    }),
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
                  <TextField
                    className={classes.textField}
                    color='secondary'
                    label="id"
                    variant="outlined"
                    id='id'
                    type='id'
                    value={values.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.id && errors.id ? (
                    <StyledMsg
                      className={classes.mesage}
                    >
                      {errors.id}
                    </StyledMsg>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    color='secondary'
                    label="firstName"
                    variant="outlined"
                    id='firstName'
                    type='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName ? (
                    <StyledMsg
                      className={classes.mesage}
                    >
                      {errors.firstName}
                    </StyledMsg>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    color='secondary'
                    label="email"
                    variant="outlined"
                    id='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email || errors.email ? (
                    <StyledMsg
                      className={classes.mesage}
                    >
                      {errors.email || error}
                    </StyledMsg>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    color='secondary'
                    label="roleId"
                    variant="outlined"
                    id='roleId'
                    type='roleId'
                    value={values.roleId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required pattern='user|admin'
                  />
                  {touched.roleId && errors.roleId ? (
                    <StyledMsg
                      className={classes.mesage}
                    >
                      {errors.roleId}
                    </StyledMsg>
                  ) : null}
                  <TextField
                    className={classes.textField}
                    color='secondary'
                    label="createdAt"
                    variant="outlined"
                    id='createdAt'
                    type='createdAt'
                    value={values.createdAt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.createdAt && errors.createdAt ? (
                    <StyledMsg
                      className={classes.mesage}
                    >
                      {errors.createdAt}
                    </StyledMsg>
                  ) : null}
                </>
                <StyledSpan>
                  <StyledButton onClick={handleClose} >Save changes</StyledButton>
                  <StyledButton onClick={handleDelete}>delete</StyledButton>
                </StyledSpan>
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