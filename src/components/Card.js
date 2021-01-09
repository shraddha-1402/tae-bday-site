// import photo1 from '../images/card-image.jpg'
import React from "react";

const Card = ({ key, songName, lyrics, image }) => {
  const music = new Audio(`${window.location.origin}/bdaySong.mp3`);
  return (
    <div key={key} className="temp-card">
      <div
        className="box"
        onMouseEnter={() => {
          music.play();
        }}
        onMouseLeave={() => {
          music.pause();
        }}
      >
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
  );
};

export default Card;
