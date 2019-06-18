import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {format: "hex"};
    this.changeFormat = this.changeFormat.bind(this);
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
      </header>
    )
  }
  changeFormat(event){
    const newFormat = event.target.value
    this.setState({
      format: newFormat
    })
    this.props.changeFormat(newFormat);
  }
}
