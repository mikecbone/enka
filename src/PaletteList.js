import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteList_Styles';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={1000}>
                <MiniPalette key={palette.id} {...palette} id={palette.id} removePalette={this.props.removePalette} openPalette={() => this.openPalette(palette.id)}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
  openPalette(id){
    this.props.history.push(`/palette/${id}`);
  }
}

export default withStyles(styles)(PaletteList);
