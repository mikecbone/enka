import React from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorPickerForm_Styles';

function ColorPickerForm(props) {
  const { paletteIsFull, colors, classes } = props;
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
      <ChromePicker width="100%" color={currentColor} onChangeComplete={updateCurrentColor} className={classes.picker}/>
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator 
            value={newColorName} 
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            onChange={handleColourNameChange}
            validators={["required", "isUniqueColorName", "isUniqueColor"]}
            errorMessages={["Enter a color name", "The color name is taken", "The color is already used"]}
            className={classes.formInput}
          />
          <Button 
            variant="contained" 
            color="primary" 
            style={{backgroundColor: paletteIsFull ? "lightgrey" : currentColor}} 
            type="submit" 
            disabled={paletteIsFull}
            className={classes.addNewColor}
          >
            {paletteIsFull ? "Full Palette" : "Add Color"}
          </Button>
        </ValidatorForm>
    </div>
  )
}

export default withStyles(styles)(ColorPickerForm)
