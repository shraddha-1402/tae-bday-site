// <<<<<<< HEAD
import "./temp.scss";
import React from "react";
import Card from "./components/Card";
import items from "./data";
// =======
// import React from "react";
// import Card from "./components/Card";
// import items from "./data";
// import "./App.css";
// >>>>>>> master

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
      <div className="glow">HAPPY BIRTHDAY TAE</div>
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
        <p>&#169;2020 Taehyungie Squad &#10084; </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
