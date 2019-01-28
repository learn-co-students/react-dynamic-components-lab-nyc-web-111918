import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {/* your conditional code here! */
        console.log(this.props.opacity)
        return (this.props.opacity >= 0.2) ? "ColorBox" : null
      </div>
    )
  }

}
