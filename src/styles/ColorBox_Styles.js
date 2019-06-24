import chroma from 'chroma-js';
import sizes from './sizes';

export default {
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
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => props.showingLevels ? "33.33333%" : "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => props.showingLevels ? "20%" : "10%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => props.showingLevels ? "10%" : "5%"
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
      padding: "1rem",
      [sizes.down("xs")]: {
        fontSize: "5rem"
      }
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
