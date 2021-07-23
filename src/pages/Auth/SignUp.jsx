import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signUp, selectApiStatus } from '../../store/auth/slice';

import TextField from '@material-ui/core/TextField';
import LinkRouter from '../../components/LinkRouter';
import FormCard from '../../components/FormCard';
import SubmitButton from '../../components/SubmitButton';
import ValidTextField from '../../components/ValidTextField';

const SignUp = () => {
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

  const onSubmit = async (data) => {
    authDispatch(signUp(data));
  };
  const renderFooter = () => {
    return <LinkRouter text="Sign In" variant="body2" to="/auth/signin" />;
  };

  const renderSubmitButton = () => {
    return (
      <SubmitButton onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} />
    );
  };

  return (
    <FormCard
      title="Sign Up"
      isLoading={isLoading}
      submitBtn={renderSubmitButton()}
      footer={renderFooter()}
      size="lg"
    >
      <ValidTextField
        variant="username"
        label="Username"
        placeholder="Enter username"
        clearErrors={clearErrors}
        error={errors.username}
        register={register}
        isLoading={isLoading}
        autoFocus
        fullWidth
        margin="normal"
      />
      <ValidTextField
        variant="email"
        label="Email"
        placeholder="Enter email"
        clearErrors={clearErrors}
        error={errors.email}
        register={register}
        isLoading={isLoading}
        fullWidth
        margin="normal"
      />
      <ValidTextField
        variant="password"
        label="Password"
        placeholder="Enter password"
        clearErrors={clearErrors}
        error={errors.password}
        register={register}
        isLoading={isLoading}
        fullWidth
        margin="normal"
      />
      <ValidTextField
        variant="confirmPassword"
        label="Confirm Password"
        placeholder="Enter password"
        clearErrors={clearErrors}
        register={register}
        isLoading={isLoading}
        fullWidth
        margin="normal"
      />
    </FormCard>
  );
};

export default SignUp;
