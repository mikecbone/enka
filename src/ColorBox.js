import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBox_Styles';

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
            <p className={classes.textColor}>{background}</p>
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
