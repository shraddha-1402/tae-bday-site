import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Overlay from "./components/Overlay";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Overlay />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
