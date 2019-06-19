import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link, Redirect } from 'react-router-dom';

export default class SingleColorPalette extends Component {
  constructor(props){
    super(props)
    this.state = {format: "hex"};

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  render() {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>
    ))
    return (
      <div className="SingleColorPalette Palette">
        <Navbar changeFormat={this.changeFormat} showLevels={false}/>
        <div className="Palette-colors">
          {colorBoxes}
          <Link to={`/palette/${id}`}>
            <div className="ColorBox go-back">
              <p className="back-button">Go Back</p>
            </div>
          </Link>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
  gatherShades(palette, colorToFilter){
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilter)
      )
    }

    return shades.slice(1);
  }
  changeFormat(value){
    this.setState({format: value})
  }
}
