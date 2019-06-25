import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteList_Styles';
import red from '@material-ui/core/colors/red'
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayDeleteDialog: false,
      deleteId: ""
    }

    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.openPalette = this.openPalette.bind(this);
    this.removePalette = this.removePalette.bind(this);
  }

  toggleDeleteDialog(id){
    this.setState(st => ({displayDeleteDialog: !st.displayDeleteDialog, deleteId: id}))
  }

  openPalette(id){
    this.props.history.push(`/palette/${id}`);
  }

  removePalette(){
    this.props.removePalette(this.state.deleteId)
    this.toggleDeleteDialog()
  }

  render() {
    const { palettes, classes} = this.props;
    const {displayDeleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>ENKA</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette 
                  {...palette}
                  key={palette.id} 
                  paletteId={palette.id}
                  id={palette.id} 
                  removePaletteDialog={this.toggleDeleteDialog} 
                  openPalette={this.openPalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog open={displayDeleteDialog} onClose={this.toggleDeleteDialog} aria-labelledby="delete-dialog-title">
          <DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.removePalette}>
              <ListItemAvatar><Avatar style={{backgroundColor: red[100], color: red[600]}}><CheckIcon/></Avatar></ListItemAvatar>
              <ListItemText primary="Delete"/>
            </ListItem>
            <ListItem button onClick={this.toggleDeleteDialog}>
              <ListItemAvatar><Avatar><CloseIcon/></Avatar></ListItemAvatar>
              <ListItemText primary="Cancel"/>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);
