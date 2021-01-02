import React, {useState} from 'react';

const Overlay = ()=>{
  const css = {
      position: "fixed",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0,0,0,0.1)",
      opacity: "1",
      zIndex: "2",
      cursor: "pointer",
      // display: "block",
  }
  const cssU = {
      position: "fixed",
      display: "none",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      // backgroundColor: "rgba(0,0,0,0.5)",
      opacity: "0",
      zIndex: "2",
      cursor: "pointer",
  }
  const [count, setCount] = useState(0);
  const [csss, setCsss] = useState(css);
  const innerStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      fontSize: "50px",
      color: "white",
      transform: "translate(-50%,-50%)",
      msTransform: "translate(-50%,-50%)",
  }
  return (
      <div
        id="overlay"
        style={csss}
        onClick={() => {
          if(count<1){
            console.log("hi")
            setCsss(cssU)
            setCount(count+1);
          }
        }}>
        <div style={innerStyle}>hello</div>
      </div>
  )

}

export default Overlay;