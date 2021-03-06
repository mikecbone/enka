import { makeStyles } from '@material-ui/core/styles';
import {DRAWER_WIDTH} from '../Constants';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const styles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    [sizes.down("xs")]: {
      fontSize: "1rem"
    }
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginRight: "1rem",
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      fontSize: "0.65rem",
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  },
  link: {
    textDecoration: "none"
  }
}));

export default styles;