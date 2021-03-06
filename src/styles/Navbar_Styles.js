import sizes from './sizes';

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },

  NavbarLogo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#ECEFF1",
    fontFamily: "Mali",
    fontStyle: "italic",
    fontWeight: "700",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },

  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "lightblue",
      outline: "none",
      border: "2px solid lightblue",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("md")]: {
      width: "200px"
    },
    [sizes.down("xs")]: {
      width: "100px"
    }
  },

  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
}
