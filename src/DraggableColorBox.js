import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "grab",
    marginBottom: "-6px",
    // "&:hover $deleteIcon": {
    //   color: "white",
    //   transform: "scale(1.4)"
    // }
  },

  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.7)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  
  deleteIcon: {
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      color: "white",
      transform: "scale(1.4)"
    }
  }
}

function DraggableColorBox(props) {
  const { color, name, classes } = props;

  function removeColorBox() {
    props.removeColorBox(name)
  }

  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span><DeleteIcon className={classes.deleteIcon} onClick={removeColorBox}/></span>
      </div>
    </div>
  )
}

export default SortableElement(withStyles(styles)(DraggableColorBox))
