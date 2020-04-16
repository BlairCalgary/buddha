import React from 'react';
// import logo from './logo.svg';
import Rotate from './components/rotate.js';
import Flip from './components/flip.js';
// import Controller from './components/controller.js';
// import Cards from './components/cards.js';
// import flip from './flip.svg';
import om from './om.svg';
import './App.css';
import './style.css';


let styles = {
  transform: 'rotate(90deg)',
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCard: {
        angle: 0,
        mirrX: 0,
        mirrY: 0,
        cardColor: "black"
      },
      redCard: {
        angle: 0,
        mirrX: 0,
        mirrY: 0,
        cardColor: "red"
      },
      khakiCard: {
        angle: 0,
        mirrX: 0,
        mirrY: 0,
        cardColor: "khaki"
      },
      greenCard: {
        angle: 0,
        mirrX: 0,
        mirrY: 0,
        cardColor: "green"
      },
    }
    this.rotateCard = this.rotateCard.bind(this)
  }
  rotateCard = (colorFromChild) => {
    for (const a of Object.entries(this.state)) {
      if (a[1].cardColor===colorFromChild) {
        console.log("Found: ", a[1].cardColor)
        
        console.log(this.state.a);
      }
      // console.log(a[1].cardColor);
      console.log(a[0]);
      // console.log(a.search(colorFromChild)); 
    }
    switch (colorFromChild) {
      case "black":
        // const rotation = this.state.blackCard.angle + 90;
        const blackCard = this.state.blackCard;
        blackCard.angle = this.state.blackCard.angle + 90;
        this.setState({"blackCard":blackCard});
        break;
      case "red":
        // const rotation = this.state.redCard.angle + 90;
        const redCard = this.state.redCard;
        redCard.angle = this.state.redCard.angle + 90;
        this.setState({"redCard":redCard});
        // console.log("red");
        break;
      case "khaki":
        // const rotation = this.state.khakiCard.angle + 90;
        const khakiCard = this.state.khakiCard;
        khakiCard.angle = this.state.khakiCard.angle + 90;
        this.setState({"khakiCard":khakiCard});
        // console.log("khaki");
        break;
      case "green":
        // const rotation = this.state.greenCard.angle + 90;
        const greenCard = this.state.greenCard;
        greenCard.angle = this.state.greenCard.angle + 90;
        this.setState({"greenCard":greenCard});
        // console.log("green");
        break;
      default:
        console.log("default")
        break;
      }
  }
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="topbtm">
            <Rotate filterColor="" cardcolor="black" rotateThis={this.rotateCard}/>
            <Flip filterColor="" cardcolor="black"/>
            {/* <div>
              <img id="flipBtn" src={flip} alt="flip" className="icon iconFlip" />
            </div> */}
          </div>
          <div className="mid">
            <div className="vertIcons">
              <Rotate filterColor="darkkhaki" cardcolor="khaki" rotateThis={this.rotateCard}/>
              <Flip filterColor="darkkhaki" cardcolor="khaki" />
              {/* <div>
                <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip darkkhaki" />
              </div> */}
            </div>
            <div className="symbolContainer">
              {/* <Cards card={om} angle={this.state.blackCard.angle}/> */}
              <img
                id="omSymbol"
                src={om}
                alt="om symbol"
                className="om stack black"
                cardcolor="black"
                style={{transform: `rotate(${this.state.blackCard.angle}deg)`}}
              />
              <img
                id="mSymbol"
                src={om}
                alt="om symbol"
                className="om stack red"
                cardcolor="red"
                style={{transform: `rotate(${this.state.redCard.angle}deg)`}}
              />
              <img
                id="Symbol"
                src={om}
                alt="om symbol"
                className="om stack darkkhaki"
                cardcolor="khaki"
                style={{transform: `rotate(${this.state.khakiCard.angle}deg)`}}
              />
              <img
                id="ymbol"
                src={om}
                alt="om symbol"
                className="om forestgreen"
                cardcolor="green"
                style={{transform: `rotate(${this.state.greenCard.angle}deg)`}}
              />
            </div>
            <div className="vertIcons">
              <Rotate filterColor="red" cardcolor="red" rotateThis={this.rotateCard}/>
              {/* <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className="icon red" /> */}
              <Flip filterColor="red" cardcolor="red" />
              {/* <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip red" /> */}
            </div>
          </div>
          <div className="topbtm">
            {/* <div className="iconContainer"> */}
              <Rotate filterColor="forestgreen" cardcolor="green" rotateThis={this.rotateCard}/>
              {/* <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className="icon forestgreen" /> */}
              <Flip filterColor="forestgreen" cardcolor="green" />
              {/* <img id="flipBtnZ" src={flip} alt="flip" className="icon iconFlip forestgreen" /> */}
            {/* </div> */}
          </div>
        </div>
      </header>
      <output id="idOutput"></output>
    </div>
  )};
}

export default App;
