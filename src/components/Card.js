import React from 'react';
import photo1 from '../images/5e7457cc062c7bbd644c28ca16b6a472.jpg'

const Card = () => {
  return(
    <React.Fragment>
      <div className="card">
        <div className="box">
          <div className="imgBx">
            <img src={photo1}/>
          </div>
          <div className="contentBx">
            <div>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  
              </p>
              <h5>Song Name</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card;