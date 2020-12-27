// import logo from './logo.svg';
import './temp.css';
import React from 'react';
import Card from './components/temp';
import photo2 from './images/hero-cropped-image.jpg';
import github from './images/icons/icons8-github-60.png';
import instagram from './images/icons/icons8-instagram-50.png'

function App() {
  return (
    <React.Fragment>
      <header>
        <div className="name-container">
          {/* <div className="name">Kim </div>
          <div className="name">Taehyung</div> */}
        </div>
        <div className="img-container">
          <img src={photo2} alt=""/>
        </div>
      </header>
      <div className="quote-section">HAPPY BIRTHDAY V</div>
      <Card/>
      <footer>
        <div>
          <h4>Contact</h4>
          <a href="https://github.com/shraddha-1402"><img src={github} alt="github"/></a>
          <a href="https://www.instagram.com/shraddha_14o2/"><img src={instagram} alt="instagram"/></a>
        </div>
        <h4>&#169;2020 Shraddha Gupta</h4>
      </footer>
    </React.Fragment>
  );
}

export default App;
