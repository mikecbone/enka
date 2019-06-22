import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteMetaForm(props) {
  const [openMetaForm, setOpenMetaForm] = React.useState(true);
  const [newPaletteName, setNewPaletteName] = React.useState("");

  function handleClickOpen() {
    setOpenMetaForm(true);
  }

  function handleClose() {
    setOpenMetaForm(false);
  }

  function handlePaletteNameChange(event) {
    setNewPaletteName(event.target.value)
  }

  function savePalette() {
    props.savePalette(newPaletteName)
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isUniquePaletteName', value =>
      props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase() 
      )
    );
  })

  return (
    <Dialog open={openMetaForm} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Save Custom Palette</DialogTitle>
      <ValidatorForm onSubmit={savePalette}>
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
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button variant="contained" color="primary" type="submit">Save Palette</Button>
      </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
