import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  BackBox: {
    height: "50%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    backgroundColor: "black",
    "&:hover $copyButton": {
      opacity: "1",
      transition: "0.4s ease-out"
    }
  },
  backButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    color: "white",
    textDecoration: "none"
  }
}

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
      <div className="SingleColorPalette Palette">
        <Navbar changeFormat={this.changeFormat} showLevels={false}/>
        <div className="Palette-colors">
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
