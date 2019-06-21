import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPalette_Styles';

function MiniPalette(props){
  const {classes, paletteName, emoji, colors} = props;
  const miniColorBoxes = colors.map(color => (
    <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}/>
  ))
  return (
    <div className={classes.root} onClick={props.openPalette}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h1 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h1>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
