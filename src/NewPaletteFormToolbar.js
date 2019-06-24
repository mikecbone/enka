import React from 'react';
import clsx from 'clsx';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Button from '@material-ui/core/Button';
import useStyles from './styles/NewPaletteFormToolbar_Styles';

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
  function hideMetaForm() {
    setShowForm(false)
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
            <LibraryAddIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>Create a Color Palette</Typography>
        </Toolbar>
        {(open && window.innerWidth < 1000) ? <div/> :
          <div className={classes.toolbarButtons}>
            <Link to="/" className={classes.link}><Button variant="contained" color="secondary" className={classes.button}>Go Back</Button></Link>
            <Button variant="contained" color="primary" onClick={showMetaForm} className={classes.button}>Save Palette</Button>
          </div>
        }
      </AppBar>
      {showForm && <PaletteMetaForm palettes={palettes} savePalette={savePalette} hideMetaForm={hideMetaForm}/> }
    </div>
  )
}
