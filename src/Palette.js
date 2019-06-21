import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/Palette_Styles';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = {level: 500, format: "hex"};

    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  render() {
    const {classes} = this.props;
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox key={color.id} colorId={color.id} paletteId={id} background={color[format]} name={color.name} showingLevels={false}/>
    ))
    return (
      <div className={classes.Palette}>
        <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showLevelsBar={true}/>
        <div className={classes.PaletteColors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
  changeLevel(level){
    this.setState({level})
  }
  changeFormat(value){
    this.setState({format: value})
  }
}

export default withStyles(styles)(Palette)
