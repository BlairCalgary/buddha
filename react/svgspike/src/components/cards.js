import React from 'react'

class Cards extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.transform = `rotate(${this.props.orientation.blackCard.angle}deg) scale(${this.props.orientation.blackCard.mirrX},${this.props.orientation.blackCard.mirrY})`
    // }
    // consolelogit=()=> {
    //     console.log("consolelogit")
    // }
    render() {
        return(
            <div className="om stack">
                <img
                    id="omSymbol"
                    src={this.props.card}
                    alt="om symbol"
                    transform={`rotate(${this.props.angle})`}
                />
            </div>
        )
    }
  }

export default Cards