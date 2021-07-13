import React from "react";

const Card = ({ songName, lyrics, image, music }) => {
  music = new Audio(music);
  const asd = () => {
    return lyrics.split("\n").map((l, i) => <p key={i}>{l}</p>);
  };
  return (
    <div className="temp-card">
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
          <div className="content">
            <div className="lyrics">{asd()}</div>
            <h5>{songName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
