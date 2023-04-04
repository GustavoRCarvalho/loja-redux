const theme = ({ isBlack }) => {
  return {
    transparentColor: "#00000022",
    primaryColor: isBlack ? "#882fa5" : "#101010",
    backgroundColor: isBlack ? "#060606" : "#f5f5f5",
    color: isBlack ? "#fff" : "#000",
    colorInvert: isBlack ? "#000" : "#fff",
    card: isBlack ? "#312e30" : "#0000000f",
    menu: {
      color: "#fff",
      fontSize: "1.2rem",
      activeBackgroundColor: "#A301FE",
      modalBackgroundColor: isBlack ? "#212021" : "#e7e7e7",
    },
    catalog: {
      fontSize: "1rem",
      fontSizePrices: "1em",
      fontWeight: "500",
      color: isBlack ? "#882fa5" : "#101010",
      colorHover: "#d32b50",
      sizeSelect: "#ffff00",
      paginationSelect: isBlack ? "#d86dff" : "#e7a5ff",
      colorOldPrice: "#aaa",
    },
    product: {
      color: isBlack ? "#882fa5" : "#c81fff",
      colorQuantity: isBlack ? "#a1a1a1" : "#000",
      colorDescription: isBlack ? "#dddddd" : "#101010",
      selectedColor: "#c961eb",
      backgroundBuy: isBlack ? "#3f9030" : "#03b700",
      backgroundQuantity: isBlack
        ? "rgba(0, 0, 0, 0.35)"
        : "rgb(255, 255, 255, 50%)",
    },
    device: {
      mobileMin: "320px",
      mobileMax: "768px",
      laptopMin: "769px",
      laptopMax: "1024px",
      desktopMin: "1025px",
    },
  }
}

export default theme
