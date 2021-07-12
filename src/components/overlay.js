import { useState } from "react";

function Overlay() {
  const css = {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,1)",
    zIndex: "3",
    cursor: "pointer",
    display: "block",
  };
  const cssU = { ...css, display: "none" };
  const [count, setCount] = useState(css);
  const innerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "5rem",
    color: "white",
    transform: "translate(-50%,-50%)",
    msTransform: "translate(-50%,-50%)",
  };
  return (
    <div
      id="overlay"
      style={count}
      onClick={() => {
        setCount(cssU);

        // const music = new Audio(`./bdaySong.mp3`);
        // music.play();
      }}
    >
      <div style={innerStyle}>Welcome!</div>
    </div>
  );
}

export default Overlay;
