import React, { Component } from 'react';
class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1

    if (this.props.opacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return (
        null
      )
    }
  } // End of render()
} // End of ColorBox component
export default ColorBox
