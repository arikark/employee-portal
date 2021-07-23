import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signUp, selectApiStatus } from '../../store/auth/slice';

import LinkRouter from '../../components/LinkRouter';
import FormCard from '../../components/FormCard';
import SubmitButton from '../../components/SubmitButton';
import ValidTextField from '../../components/ValidTextField';

const SignIn = () => {
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
    return (
      <>
        <LinkRouter text="Sign Up" variant="body2" to="/auth/signup" />
        <LinkRouter
          text="Forgot password?"
          variant="body2"
          to="/auth/resetpassword"
        />
      </>
    );
  };

  const renderSubmitButton = () => {
    return (
      <SubmitButton onSubmit={handleSubmit(onSubmit)} isLoading={isLoading} />
    );
  };

  return (
    <FormCard
      title="Sign In"
      isLoading={isLoading}
      submitBtn={renderSubmitButton()}
      footer={renderFooter()}
      size="sm"
    >
      <ValidTextField
        variant="username"
        label="Username or Email"
        placeholder="Enter username or email"
        clearErrors={clearErrors}
        error={errors.username}
        register={register}
        isLoading={isLoading}
        autoFocus
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
    </FormCard>
  );
};

export default SignIn;
