import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles/Navbar_Styles';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {format: "hex", isSnackBarOpen: false};
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
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

  render() {
    const {level, changeLevel, showLevelsBar, classes} = this.props;
    const {format} = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.NavbarLogo}>
          <Link to="/">Enka</Link>
        </div>
        { showLevelsBar &&
          <div>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider defaultValue={level} min={100} max={900} step={100} onChange={changeLevel}/>
            </div>
          </div>
        }
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
            <MenuItem value="hsl">HSL - hsl(0, 100%, 100%)</MenuItem>
            <MenuItem value="hsla">HSLA - hsla(0, 100%, 100%, 1)</MenuItem>
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
}

export default withStyles(styles)(Navbar)
