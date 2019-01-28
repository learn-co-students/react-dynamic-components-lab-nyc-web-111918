import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1
    return (
    // if (this.props.opacity >= 0.2) {
    //   return (
    //     <div className="color-box" style={{opacity: 2}}>
    //       <ColorBox opacity={newOpacity} />
    //     </div>
    //   )
    // } else {
    //   return null
    // }

      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={newOpacity} /> : null}
      </div>
    )
  }
}
