import React from 'react'
import rotate from './rotate.svg';

class Rotate extends React.Component {
    render() {
        return(
            <div>
                <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className={`icon ${this.props.filterColor}`} />
            </div>
        )
    }
  }

export default Rotate