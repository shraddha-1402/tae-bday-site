import './temp.css';
// import React, {useEffect, useState} from 'react';
import Card from './components/temp';
import photo2 from './images/hero-cropped-image.jpg';
import github from './images/icons/icons8-github-60.png';
import instagram from './images/icons/icons8-instagram-50.png';
import imgsd from './images/card-image.jpg'; 
import items from './data';

// const playSound = ()=>{
//   document.getElementById("overlay").style.opacity=0;
//   // overlay.remove();
//   new Audio(`${window.location.origin}/bell_ring.mp3`).play();
// }

function App() {
  // const [snd] = useState();
  // const [play, setPlay] = useState(true);
  //   window.addEventListener(
  //     'click', 
  //     ()=>{
  //     console.log(window.location.origin);
      
  //   })
  // );
  // const func = ()=> {
  //   return(<script>
  //     var overlay = document.getElementById("overlay");
  //     overlay.a
  //     overlay.style.opacity=0;
  //     overlay.remove();
  //     snd.play();</script>);
  // }

  const looping = (items)=>{
    const cardArr = [];
    for(var item in items){
      // console.log(item);
      cardArr.push(<Card songName={item} lyrics="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum" image={imgsd}/>);
    }
    return cardArr; 
  }
  return (
    <React.Fragment>
      <header>
        {/* {play && func()} */}
      {/* <div id="overlay"
      onClick = {playSound()}
      >
        Click to get started
      </div> */}
        <div className="name-container">
        </div>
        <div className="img-container">
          <img src={photo2} alt=""/>
        </div>
      </header>
      <div className="glow">HAPPY BIRTHDAY V</div>
      <section className="temp-section">
        {looping(items)}
      </section>
      <footer>
        <div>
          <a href="https://github.com/shraddha-1402"><img src={github} alt="github"/></a>
          <a href="https://www.instagram.com/shraddha_14o2/"><img src={instagram} alt="instagram"/></a>
        </div>
        <p>&#169;2020 Shraddha Gupta</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
