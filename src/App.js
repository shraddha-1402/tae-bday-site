import React, { useEffect } from "react";
import Card from "./components/Card";
import photo2 from "./images/hero-cropped-image.jpg";
import github from "./images/icons/icons8-github-60.png";
import instagram from "./images/icons/icons8-instagram-50.png";
import imgsd from "./images/card-image.jpg";
import items from "./data";
import "./App.css";

function App() {
  const looping = (items) => {
    const cardArr = [];
    console.log(items["songs"]);
    items["songs"].forEach((item) => {
      // console.log(typeof(item.image));
      // console.log(typeof(imgsd));
      // let imgsd = item.image;
      cardArr.push(
        <Card
          key={item.id}
          songName={item.song}
          lyrics={item.lyrics}
          image={imgsd}
        />
      );
    });
    // for (var item in items["songs"]) {
    //   console.log(item.id);
    //   //
    // }
    return cardArr;
  };
  return (
    <React.Fragment>
      <header>
        <div className="name-container"></div>
        <div className="img-container">
          <img src={photo2} alt="" />
        </div>
      </header>
      <div className="glow">HAPPY BIRTHDAY V</div>
      <section className="temp-section">{looping(items)}</section>
      <footer>
        <div>
          <a href="https://github.com/shraddha-1402">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/shraddha_14o2/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <p>&#169;2020 Shraddha Gupta</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
