import { useState } from "react";

function Overlay() {
  const css = {
    display: "block",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,1)",
    zIndex: "3",
    cursor: "pointer",
  };
  const cssU = { display: "none" };
  const [overlayStyle, setOverlayStyle] = useState(css);
  const headingStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "50px",
    color: "white",
    transform: "translate(-50%,-50%)",
    msTransform: "translate(-50%,-50%)",
  };
  return (
    <div
      style={overlayStyle}
      onClick={() => {
        setOverlayStyle(cssU);
      }}
    >
      <div style={headingStyle}>Welcome</div>
    </div>
  );
}

export default Overlay;
