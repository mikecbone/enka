import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

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
    borderTopLeftRadius: "5px",
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
    borderRadius: "5px",
    color: props => chroma(props.background).luminance() <= 0.345 ? "white" : "black"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 0.5s ease-in-out"
  },
  showCopyOverlay: {
    opacity: "1",
    transform: "scale(10)",
    zIndex: "10",
    position: "absolute"
  },
  copyMsg: {
    position: "fixed",
    left: "0px",
    right: "0px",
    top: "0px",
    bottom: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.001)",
    opacity: "0",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      marginBottom: "0",
      padding: "1rem"
    },
    "& p": {
      fontWeight: "100",
      fontSize: "1.6rem"
    }
  },
  showCopyMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "20",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false, copiedText: "Copied!" };
    this._copiedText = ["Copied!", "That's perfect!", "I love it!", "Great choice!"]
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  render() {
    const {name, background, paletteId, colorId, showingLevels, classes} = this.props;
    const {copied, copiedText} = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{background}} className={classes.ColorBox}>
          <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showCopyOverlay}`} />
          <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
            <h1>{copiedText}</h1>
            <p className={classes.textColor}>{this.props.background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
  componentDidMount() {
    this.setState({copiedText: this.getCopiedText()})
  }
  changeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({ copied: false }), 1200);
    });
  }
  getCopiedText() {
    const randomIndex = Math.round(Math.random() * (this._copiedText.length -1))
    return this._copiedText[randomIndex]
  }
}

export default withStyles(styles)(ColorBox)
