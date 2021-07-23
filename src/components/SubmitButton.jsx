import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    circularProgress: {
      color: 'inherit',
    },
  })
);

const SubmitButton = ({ submitBtnText = 'submit', onSubmit, isLoading }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={classes.loginBtn}
      onClick={onSubmit}
      type="submit"
    >
      {isLoading ? (
        <CircularProgress size={26} className={classes.circularProgress} />
      ) : (
        submitBtnText
      )}
    </Button>
  );
};

export default SubmitButton;
