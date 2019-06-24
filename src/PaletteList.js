import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteList_Styles';

class PaletteList extends Component {
  render() {
    const { palettes, classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>ENKA</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette key={palette.id} {...palette} id={palette.id} removePalette={this.props.removePalette} openPalette={() => this.openPalette(palette.id)}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
  openPalette(id){
    this.props.history.push(`/palette/${id}`);
  }
}

export default withStyles(styles)(PaletteList);
