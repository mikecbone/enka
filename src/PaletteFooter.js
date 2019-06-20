import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  PaletteFooter: {
    backgroundColor: "#fff",
    height: "4vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold"
  },
  PaletteEmoji: {
    fontSize: "1.5rem",
    margin: "0 1rem"
  }
}

function PaletteFooter(props) {
  const {paletteName, emoji, classes} = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.PaletteEmoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(styles)(PaletteFooter)
