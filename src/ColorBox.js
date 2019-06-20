import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
  ColorBox: {
    height: props => props.showingLevels ? "50%" : "25%",
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover $copyButton": {
      opacity: "1",
      transition: "0.4s ease-out"
    }
  },
  textColor: {
    color: props => chroma(props.background).luminance() <= 0.345 ? "white" : "black"
  },
  seeMore: {
    background: "rgba(2255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "80px",
    height: "36px",
    textAlign: "center",
    lineHeight: "36px",
    textTransform: "uppercase",
    color: props => chroma(props.background).luminance() <= 0.345 ? "white" : "rgba(0, 0, 0, 0.8)"
  },
  copyButton: {
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
    opacity: "0",
    color: props => chroma(props.background).luminance() <= 0.345 ? "white" : "black"
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }
  render() {
    const {name, background, paletteId, colorId, showingLevels, classes} = this.props;
    const {copied} = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{background}} className={classes.ColorBox}>
          <div style={{background}} className={`copy-overlay ${copied && "show"}`} />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.textColor}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.textColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {!showingLevels &&
            <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
  changeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
}

export default withStyles(styles)(ColorBox)
