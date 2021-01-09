// import photo1 from '../images/card-image.jpg'
import React from "react";
// import Overlay from "./overlay"

const Temp = ({ key, songName, lyrics, image }) => {
  return (
    <React.Fragment>
      <div className="temp-card" key={key}>
        <div className="box">
          <div className="imgBx">
            <img src={image} alt="taehyung's" />
          </div>
          <div className="contentBx">
            <div>
              <p>{lyrics}</p>
              <h5>{songName}</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Temp;
