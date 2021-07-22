import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
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

const FormCard = ({ children, isLoading, submitBtn, title, footer }) => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title={title} />
        <CardContent className={classes.content}>
          <div>{children}</div>
        </CardContent>
        <CardActions className={classes.actions}>{submitBtn}</CardActions>
        <div className={classes.footer}>{footer}</div>
      </Card>
    </form>
  );
};

export default FormCard;
