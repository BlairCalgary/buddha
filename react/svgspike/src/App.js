import React from 'react';
// import logo from './logo.svg';
import Rotate from './components/rotate.js';
import Flip from './components/flip.js';
import Cards from './components/cards.js';
// import flip from './flip.svg';
import om from './om.svg';
import './App.css';
import './style.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="topbtm">
            <Rotate filterColor="" />
            <Flip filterColor="" />
            {/* <div>
              <img id="flipBtn" src={flip} alt="flip" className="icon iconFlip" />
            </div> */}
          </div>
          <div className="mid">
            <div className="vertIcons">
              <Rotate filterColor="darkkhaki" />
              <Flip filterColor="darkkhaki" />
              {/* <div>
                <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip darkkhaki" />
              </div> */}
            </div>
            <div className="symbolContainer">
              <Cards card={om} />
              <img id="omSymbol" src={om} alt="om symbol" className="om stack" />
              <img id="mSymbol" src={om} alt="om symbol" className="om stack red" />
              <img id="Symbol" src={om} alt="om symbol" className="om stack darkkhaki" />
              <img id="ymbol" src={om} alt="om symbol" className="om forestgreen" />
            </div>
            <div className="vertIcons">
              <Rotate filterColor="red" />
              {/* <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className="icon red" /> */}
              <Flip filterColor="red" />
              {/* <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip red" /> */}
            </div>
          </div>
          <div className="topbtm">
            {/* <div className="iconContainer"> */}
              <Rotate filterColor="forestgreen" />
              {/* <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className="icon forestgreen" /> */}
              <Flip filterColor="forestgreen" />
              {/* <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip forestgreen" /> */}
            {/* </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
