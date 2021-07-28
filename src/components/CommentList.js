import React, { Component } from 'react'
import data from './../data'


class CommentList extends Component {
    render () {
      const elem = data.comments;

      return (
       <ul>
         {elem.map(s => (<li>{s.text}</li>))}
       </ul>
      )
    }
  };

export default CommentList


