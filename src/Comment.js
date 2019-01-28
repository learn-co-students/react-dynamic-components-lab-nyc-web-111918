// add Comment component here
import React, { Component } from 'react';
import BlogPost from './BlogPost.js'

export default class Comment extends Component {
// render something
// within render return a div
// within he div we want to have this.props.commentText.
render() {
  return ( // WRITING JSX
    <div className="comment">
    {this.props.commentText}
    </div>

  )// end of return
}


}
