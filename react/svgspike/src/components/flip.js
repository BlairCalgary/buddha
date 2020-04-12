import React from 'react'
import flip from './flip.svg';

class Flip extends React.Component {
    render() {
        return(
            <div>
                <img id="rotateBtnZ" src={flip} alt="rotate clockwise" className={`icon ${this.props.filterColor}`} />
            </div>
        )
    }
  }

export default Flip