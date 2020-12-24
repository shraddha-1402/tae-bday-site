// import logo from './logo.svg';
import './temp.css';
import React from 'react';
import Card from './components/temp';
import photo2 from './images/IMG_20201221_171344.jpg'

function App() {
  return (
    <React.Fragment>
      <header>
        {/* <div className="name-quote-container">
          <div className="name">
            <div>Kim </div><div>Taehyung</div>
          </div>
          <span className="quote">Some Taehyung's quote</span>
        </div> */}
        <div className="img-container">
          <img src={photo2}/>
        </div>
      </header>
      <Card/>
    </React.Fragment>
  );
}

export default App;
