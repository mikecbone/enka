import sizes from './sizes';
import bg from '../flatMountains.svg';

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-in"
    }
  },
  root: {
    backgroundColor: "#ff7700",
    backgroundImage: `url(${bg})`, // background by SVGBackgrounds.com
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "50%", 
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "65%",
    },
    [sizes.down("md")]: {
      width: "90%",
    }
  },
  nav: {
    display: "flex",
    width: "100%", 
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 32%)",
    gridGap: "2%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 49%)",
      gridGap: "2%"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "0.5%",
    }
  }
}

// https://w.wallhaven.cc/full/76/wallhaven-765e8e.jpg
// https://w.wallhaven.cc/full/nm/wallhaven-nmpd78.png
// https://w.wallhaven.cc/full/ne/wallhaven-nevkvw.jpg
// https://w.wallhaven.cc/full/95/wallhaven-955pvw.png
// https://w.wallhaven.cc/full/42/wallhaven-4258gy.jpg
// https://w.wallhaven.cc/full/eo/wallhaven-eoyk5w.jpg
