import React from "react";
import Card from "./components/Card";
import items from "./data";
import "./App.css";

function App() {
  const looping = (items) => {
    const cardArr = [];
    items["songs"].forEach((item) => {
      cardArr.push(
        <Card
          key={item.id}
          songName={item.song}
          lyrics={item.lyrics}
          image={item.image}
          music={item.music}
        />
      );
    });
    return cardArr;
  };
  return (
    <React.Fragment>
      <header>
        <div className="name-container"></div>
        <div className="img-container">
          <img src="./images/hero-cropped-image.jpg" alt="" />
        </div>
      </header>
      <div className="glow">WE PURPLE YOU !</div>
      <section className="temp-section">{looping(items)}</section>
      <footer>
        <div>
          <a href="https://github.com/shraddha-1402">
            <img src="./images/icons/icons8-github-60.png" alt="github" />
          </a>
          <a href="https://www.instagram.com/shraddha_14o2/">
            <img src="./images/icons/icons8-instagram-50.png" alt="instagram" />
          </a>
        </div>
        <p>&#169;2020 Taehyungie Squad </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
