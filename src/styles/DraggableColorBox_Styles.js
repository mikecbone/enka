const styles = {
    root: {
      width: "20%",
      height: "25%",
      margin: "0 auto",
      display: "inline-block",
      position: "relative",
      cursor: "grab",
      marginBottom: "-6px",
    },
  
    boxContent: {
      position: "absolute",
      width: "100%",
      left: "0px",
      bottom: "0px",
      padding: "10px",
      color: "rgba(0, 0, 0, 0.7)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between"
    },
    
    deleteIcon: {
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: "white",
        transform: "scale(1.4)"
      }
    }
  }

  export default styles;