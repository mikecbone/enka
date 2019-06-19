import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {format: "hex", isSnackBarOpen: false};
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className="Navbar-logo">
          <a href="#">Enka</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel}/>
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
          open={this.state.isSnackBarOpen}
          onClose={this.closeSnackbar}
          autoHideDuration={3000}
          message={<span id="snackbar-message">Format Changed To {format.toUpperCase()}!</span>}
          ContentProps={{"aria-describedby": "snackbar-message"}}
          action={[<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close"><CloseIcon/></IconButton>]}
          d
        />
      </header>
    )
  }
  changeFormat(event){
    const newFormat = event.target.value
    this.setState({
      format: newFormat,
      isSnackBarOpen: true
    })
    this.props.changeFormat(newFormat);
  }
  closeSnackbar() {
    this.setState({isSnackBarOpen: false})
  }
}