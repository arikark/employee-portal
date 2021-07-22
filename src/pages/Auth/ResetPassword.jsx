import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signUp, selectApiStatus } from '../../store/auth/slice';

import TextField from '@material-ui/core/TextField';
import LinkRouter from '../../components/LinkRouter';
import FormCard from '../../components/FormCard';
import SubmitButton from '../../components/SubmitButton';

const ResetPassword = () => {
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

  const isLoading = authApiStatus.includes('Loading');
  const submitBtnText = 'reset password';

  const onSubmit = async (data) => {
    authDispatch(signUp(data));
  };
  const renderFooter = () => {
    return <LinkRouter text="Sign In" variant="body2" to="/auth/signin" />;
  };

  const renderSubmitButton = () => {
    return (
      <SubmitButton
        submitBtnText={submitBtnText}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    );
  };

  return (
    <FormCard
      title="Reset Password"
      isLoading={isLoading}
      submitBtn={renderSubmitButton()}
      footer={renderFooter()}
    >
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
      />
    </FormCard>
  );
};

export default ResetPassword;
