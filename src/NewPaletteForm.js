import React from 'react';
import clsx from 'clsx';
import NewPaletteFormToolbar from './NewPaletteFormToolbar';
import ColorPickerForm from './ColorPickerForm';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/button';
import DraggableColorBoxList from './DraggableColorBoxList';
import arrayMove from "array-move";

const drawerWidth = 440;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm(props) {
  const classes = useStyles();
  const {maxColors, palettes} = props;
  const [open, setOpen] = React.useState(true);
  const [colors, setColors] = React.useState(palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function addNewColor(newColor) {
    setColors([...colors, newColor])
  }

  function removeColorBox(colorName) {
    setColors(
      colors.filter(color => color.name !== colorName)
    )
  }

  function onSortEnd({oldIndex, newIndex}) {
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  function clearColors() {
    setColors([])
  }

  function addRandomColor() {
    // Check for existing colour?
    const randomPaletteIndex = Math.floor(Math.random() * palettes.length)
    const randomPalette = palettes[randomPaletteIndex]
    const randomColorIndex = Math.floor(Math.random() * randomPalette.colors.length)
    const randomColor = randomPalette.colors[randomColorIndex]
    setColors([...colors, randomColor])
  }

  function savePalette(newPaletteName) {
    const newPaletteId = newPaletteName.toLowerCase().replace(/ /g, "-")
    const newPalette = {paletteName: newPaletteName, id: newPaletteId, emoji: "X", colors: colors}
    props.savePalette(newPalette)
    props.history.push("/")
  }

  return (
    <div className={classes.root}>
      <NewPaletteFormToolbar 
        open={open} 
        classes={classes} 
        palettes={palettes} 
        savePalette={savePalette} 
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
          <Button variant="contained" color="primary" onClick={addRandomColor} disabled={paletteIsFull}>Random Color</Button>
        </div>
        <ColorPickerForm 
          paletteIsFull={paletteIsFull}
          addNewColor={addNewColor}
          colors={colors}
        />
      </Drawer>
      <main className={clsx(classes.content, {[classes.contentShift]: open})}>
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList axis="xy" onSortEnd={onSortEnd} colors={colors} removeColorBox={removeColorBox}/>
      </main>
    </div>
  );
}

NewPaletteForm.defaultProps = {
  maxColors: 20
}
