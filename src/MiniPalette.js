import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPalette_Styles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props){
  const {classes, paletteName, emoji, colors} = props;
  const miniColorBoxes = colors.map(color => (
    <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}/>
  ))

  function deletePalette(e) {
    e.stopPropagation();
    props.removePalette(props.id)
  }

  return (
    <div className={classes.root} onClick={props.openPalette}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette}/>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h1 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h1>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
