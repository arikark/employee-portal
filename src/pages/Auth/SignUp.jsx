import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signIn, selectApiStatus } from '../../store/auth/slice';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

import LinkRouter from '../../components/LinkRouter';

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
    circularProgress: {
      color: 'info',
      size: 20,
      marginLeft: 0,
      marginRight: theme.spacing,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(20),
      minWidth: theme.spacing(50),
      minHeight: theme.spacing(40),
      padding: theme.spacing(1),
    },
    content: {
      maxHeight: theme.spacing(18),
      marginBottom: theme.spacing(0),
    },
    actions: {
      marginTop: theme.spacing(0),
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'start',
      paddingInline: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  })
);

const SignUp = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const authDispatch = useDispatch();
  const authApiStatus = useSelector(selectApiStatus);

  const onSubmit = async (data) => {
    authDispatch(signIn(data));
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Sign Up" />
        <CardContent className={classes.content}>
          <div>
            <TextField
              autoFocus
              disabled={authApiStatus.includes('Loading')}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              error={!!errors.username}
              helperText={errors?.username?.message}
              onClick={() => clearErrors('username')}
              {...register('username', {
                required: {
                  value: true,
                  message: 'You must enter a valid username',
                },
              })}
            />
            <TextField
              disabled={authApiStatus.includes('Loading')}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onClick={() => clearErrors('password')}
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
        <CardActions className={classes.actions}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            {authApiStatus.includes('Loading') ? (
              <CircularProgress
                color="info"
                className={classes.circularProgress}
                size={26}
              />
            ) : (
              'Login'
            )}
          </Button>
        </CardActions>
        <div className={classes.footer}>
          <LinkRouter variant="body2" to="/auth/signin">
            Sign In
          </LinkRouter>
        </div>
      </Card>
    </form>
  );
};

export default SignUp;
