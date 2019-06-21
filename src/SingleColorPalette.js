import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Palette_Styles';

class SingleColorPalette extends Component {
  constructor(props){
    super(props)
    this.state = {format: "hex"};

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  render() {
    const {format} = this.state;
    const {classes} = this.props;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showingLevels={true}/>
    ))
    return (
      <div className={classes.Palette}>
        <Navbar changeFormat={this.changeFormat} showLevels={false}/>
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <Link to={`/palette/${id}`}>
            <div className={classes.BackBox}>
              <p className={classes.backButton}>Go Back</p>
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

export default withStyles(styles)(SingleColorPalette)
