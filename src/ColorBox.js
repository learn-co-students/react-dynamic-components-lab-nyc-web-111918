import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = (Math.round(this.props.opacity * 10) -1) / 10;
    // console.log(newOpacity);
    if (this.props.opacity >= .2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )// end of return
    } else {
      return null;
    } //end of if
  } // end of render

}
