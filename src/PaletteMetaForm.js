import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function PaletteMetaForm(props) {
  const [newPaletteName, setNewPaletteName] = React.useState("");
  const [stage, setStage] = React.useState("name");

  function handlePaletteNameChange(event) {
    setNewPaletteName(event.target.value)
  }

  function changeToEmojiPicker() {
    setStage("emoji")
  }

  function savePalette(emoji) {
    const newPalette = {paletteName: newPaletteName, emoji: emoji.native}
    props.savePalette(newPalette)
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isUniquePaletteName', value =>
      props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase() 
      )
    );
  })

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={props.hideMetaForm}>
      <DialogTitle id="form-dialog-title">Select a Palette Emoji</DialogTitle>
        <Picker title="Palette Emoji" onSelect={savePalette}/>
      </Dialog>
      <Dialog open={stage === "name"} onClose={props.hideMetaForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save Custom Palette</DialogTitle>
        <ValidatorForm onSubmit={changeToEmojiPicker}>
        <DialogContent>
          <DialogContentText>
            Enter a unique name for your new custom palette.
          </DialogContentText>
            <TextValidator 
              value={newPaletteName} 
              onChange={handlePaletteNameChange}
              validators={["required", "isUniquePaletteName"]}
              fullWidth
              margin="normal"
              errorMessages={["Enter a palette name", "The palette name is already taken"]}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.hideMetaForm} color="primary">Cancel</Button>
          <Button variant="contained" color="primary" type="submit">Next</Button>
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
