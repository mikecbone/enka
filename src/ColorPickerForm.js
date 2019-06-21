import React from 'react';
import Button from '@material-ui/core/button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function ColorPickerForm(props) {
  const { paletteIsFull, colors } = props;
  const [currentColor, setCurrentColor] = React.useState('purple');
  const [newColorName, setNewColorName] = React.useState("");

  function updateCurrentColor(newColor) {
    setCurrentColor(newColor.hex)
  }

  function handleColourNameChange(event) {
    setNewColorName(event.target.value)
  }
  
  function addNewColor() {
    const newColor = {color: currentColor, name: newColorName}
    props.addNewColor(newColor)
    setNewColorName("")
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isUniqueColorName', value =>
      colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isUniqueColor', value =>
      colors.every(
        ({color}) => color !== currentColor
      )
    );
  })

  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={updateCurrentColor}/>
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator 
            value={newColorName} 
            onChange={handleColourNameChange}
            validators={["required", "isUniqueColorName", "isUniqueColor"]}
            errorMessages={["Enter a color name", "The color name is taken", "The color is already used"]}
          />
          <Button 
            variant="contained" 
            color="primary" 
            style={{backgroundColor: paletteIsFull ? "lightgrey" : currentColor}} 
            type="submit" 
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Full Palette" : "Add Color"}
          </Button>
        </ValidatorForm>
    </div>
  )
}
