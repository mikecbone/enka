import React from 'react';
import clsx from 'clsx';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/button';

const drawerWidth = 440;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  },
  link: {
    textDecoration: "none"
  }
}));

export default function NewPaletteFormToolbar(props) {
  const classes = useStyles();
  const {open, handleDrawerOpen, palettes} = props;
  const [showForm, setShowForm] = React.useState(false);

  function savePalette(newPaletteName) {
    props.savePalette(newPaletteName)
  }

  function showMetaForm() {
    setShowForm(true)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>Create a Color Palette</Typography>
        </Toolbar>
        <div className={classes.toolbarButtons}>
          <Link to="/" className={classes.link}><Button variant="contained" color="secondary" className={classes.button}>Go Back</Button></Link>
          <Button variant="contained" color="primary" onClick={showMetaForm} className={classes.button}>Save Palette</Button>
        </div>
      </AppBar>
      {showForm && <PaletteMetaForm palettes={palettes} savePalette={savePalette} setShowForm={showMetaForm}/> }
    </div>
  )
}
