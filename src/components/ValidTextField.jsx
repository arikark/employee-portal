import { TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    textField: {
      marginBottom: theme.spacing(0),
    },
  })
);

const ValidTextField = ({
  variant,
  label,
  placeholder,
  clearErrors,
  register,
  error,
  isLoading,
  ...props
}) => {
  const classes = useStyles();
  return (
    <TextField
      // margin="dense"
      // className={classes.textField}
      {...props}
      disabled={isLoading}
      id={`${variant}`}
      type={`${label}`}
      label={`${label}`}
      placeholder={`${placeholder}`}
      onClick={() => clearErrors(`${variant}`)}
      {...register(`${variant}`, {
        required: {
          value: true,
          message: `You must enter a valid ${label}`,
        },
      })}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default ValidTextField;
