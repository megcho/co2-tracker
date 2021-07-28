import React, { Component } from 'react'
import data from './../data'


class CommentList extends Component {
    render () {
      const elem = data.comments;

      return (
       <ul>
         {Object.keys(elem).map(s => (<li>{s}</li>))}
       </ul>
      )
    }
  };

export default CommentList


