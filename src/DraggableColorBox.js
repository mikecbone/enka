import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBox_Styles';

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
