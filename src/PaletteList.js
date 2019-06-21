import React, { Component } from 'react';
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
            <h1>ENKA</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette key={palette.id} {...palette} openPalette={() => this.openPalette(palette.id)}/>
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


// https://w.wallhaven.cc/full/76/wallhaven-765e8e.jpg
// https://w.wallhaven.cc/full/nm/wallhaven-nmpd78.png
// https://w.wallhaven.cc/full/ne/wallhaven-nevkvw.jpg
// https://w.wallhaven.cc/full/95/wallhaven-955pvw.png
// https://w.wallhaven.cc/full/42/wallhaven-4258gy.jpg
// https://w.wallhaven.cc/full/eo/wallhaven-eoyk5w.jpg
