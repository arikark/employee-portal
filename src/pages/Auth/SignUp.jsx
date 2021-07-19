import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInputState from '../utils/hooks/useInputState';
import { useForm } from 'react-hook-form';

import {
  confirmSignUp,
  signIn,
  selectApiStatus,
  selectErrorMessage,
} from '../store/auth/slice';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(30),
      minWidth: theme.spacing(50),
      minHeight: theme.spacing(50),
    },
  })
);

const Login = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  // const [username, handleUsernameChange, resetUsername] = useInputState('');
  // const [password, handlePasswordChange, resetPassword] = useInputState('');
  const authApiStatus = useSelector(selectApiStatus);
  const authError = useSelector(selectErrorMessage);
  const authDispatch = useDispatch();

  const onSubmit = async (data, erros) => {
    authDispatch(signIn(data));
  };
  // const handleKeyPress = (event) => {
  //   if (event.keyCode === 13 || event.which === 13) {
  //     isButtonDisabled || handleLogin();
  //   }
  // };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              error={!!errors.username}
              helperText={errors?.username?.message}
              {...register('username', {
                required: {
                  value: true,
                  message: 'You must enter a valid username',
                },
              })}
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              {...register('password', {
                required: {
                  value: true,
                  message: 'You must enter a valid password',
                },
              })}
              error={!!errors.password}
              helperText={errors?.password?.message}
              // onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
