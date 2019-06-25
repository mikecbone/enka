import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPalette_Styles';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = React.memo((props) => {
  const {classes, paletteName, emoji, colors} = props;
  const renders = React.useRef(0);
  const miniColorBoxes = colors.map(color => (
    <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}/>
  ))

  function openPalette() {
    props.openPalette(props.paletteId)
  }

  function deletePalette(e) {
    e.stopPropagation();
    props.removePaletteDialog(props.id)
  }

  return (
    <div className={classes.root} onClick={openPalette}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette}/>
      <div className={classes.colors}>
        {miniColorBoxes}
        <div>renders: {renders.current++}</div>
      </div>
      <h1 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h1>
    </div>
  )
})

export default withStyles(styles)(MiniPalette);
