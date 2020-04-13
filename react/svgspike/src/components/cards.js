import React from 'react'

class Cards extends React.Component {
    render() {
        return(
            <div className="om stack">
                <img
                    id="omSymbol"
                    src={this.props.card}
                    alt="om symbol"
                    
                />
            </div>
        )
    }
  }

export default Cards