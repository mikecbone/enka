import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }
  render() {
    const {name, background, paletteId, colorId, showLink} = this.props;
    const {copied} = this.state;
    const isDark = chroma(background).luminance() <= 0.345;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{background}} className="ColorBox">
          <div style={{background}} className={`copy-overlay ${copied && "show"}`} />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={isDark ? "" : "dark-text"}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDark ? "light-text" : ""}>{name}</span>
            </div>
            <button className={isDark ? "copy-button" : "copy-button dark-text"}>Copy</button>
          </div>
          {showLink &&
            <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
              <span className={isDark ? "see-more" : "see-more dark-text"}>More</span>
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
