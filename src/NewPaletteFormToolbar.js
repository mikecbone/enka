import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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

  }
}));

export default function NewPaletteFormToolbar(props) {
  const classes = useStyles();
  const {open, handleDrawerOpen} = props;
  const [newPaletteName, setNewPaletteName] = React.useState("");

  function handlePaletteNameChange(event) {
    setNewPaletteName(event.target.value)
  }

  function savePalette() {
    props.savePalette(newPaletteName)
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isUniquePaletteName', value =>
      props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase() 
      )
    );
  })

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
          <ValidatorForm onSubmit={savePalette}>
            <TextValidator 
              value={newPaletteName} 
              onChange={handlePaletteNameChange}
              validators={["required", "isUniquePaletteName"]}
              errorMessages={["Enter a palette name", "The palette name is already taken"]}
            />
            <Button variant="contained" color="primary" type="submit">Save Palette</Button>
          </ValidatorForm>
          <Link to="/"><Button variant="contained" color="primary">Go Back</Button></Link>
        </div>
      </AppBar>
    </div>
  )
}
