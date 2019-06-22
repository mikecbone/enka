export default {
  root: {
    backgroundColor: "grey",
    backgroundImage: "url('https://w.wallhaven.cc/full/ne/wallhaven-nevkvw.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%", 
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
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
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
}

// https://w.wallhaven.cc/full/76/wallhaven-765e8e.jpg
// https://w.wallhaven.cc/full/nm/wallhaven-nmpd78.png
// https://w.wallhaven.cc/full/ne/wallhaven-nevkvw.jpg
// https://w.wallhaven.cc/full/95/wallhaven-955pvw.png
// https://w.wallhaven.cc/full/42/wallhaven-4258gy.jpg
// https://w.wallhaven.cc/full/eo/wallhaven-eoyk5w.jpg
