import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
      padding: theme.spacing(1),
      minWidth: theme.spacing(50),
    },
    smCard: {
      minHeight: theme.spacing(40),
    },
    mdCard: {
      minHeight: theme.spacing(50),
    },
    lgCard: {
      minHeight: theme.spacing(60),
    },
    content: {
      marginBottom: theme.spacing(0),
    },
    smContent: {
      maxHeight: theme.spacing(18),
    },
    mdContent: {
      maxHeight: theme.spacing(30),
    },
    lgContent: {
      maxHeight: theme.spacing(46),
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

const FormCard = ({ children, size, submitBtn, title, footer }) => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card
        className={clsx(classes.card, {
          [classes.smCard]: size === 'sm',
          [classes.mdCard]: size === 'md',
          [classes.lgCard]: size === 'lg',
        })}
      >
        <CardHeader className={classes.header} title={title} />
        <CardContent
          className={clsx(classes.content, {
            [classes.smContent]: size === 'sm',
            [classes.mdContent]: size === 'md',
            [classes.lgContent]: size === 'lg',
          })}
        >
          <div>{children}</div>
        </CardContent>
        <CardActions className={classes.actions}>{submitBtn}</CardActions>
        <div className={classes.footer}>{footer}</div>
      </Card>
    </form>
  );
};

export default FormCard;
