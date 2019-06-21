import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from "react-sortable-hoc";

function DraggableColorBoxList(props) {
  const {colors, removeColorBox} = props;
  return (
    <div style={{height: "100%"}}>
      {colors.map((color, i) => (
        <DraggableColorBox index={i} key={color.name} color={color.color} name={color.name} removeColorBox={removeColorBox}/>
      ))}
    </div>
  )
}

export default SortableContainer(DraggableColorBoxList)
