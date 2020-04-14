import React from 'react'
import rotate from './rotate.svg';

class Rotate extends React.Component {
    rotate = () => {
        const color = this.props.cardcolor;
        this.props.rotateThis(color);
    }
    render() {
        return(
            <div>
                <img id="rotateBtnZ" src={rotate} alt="rotate clockwise" className={`icon ${this.props.filterColor}`} onClick={this.rotate} />
            </div>
        )
    }
  }

export default Rotate