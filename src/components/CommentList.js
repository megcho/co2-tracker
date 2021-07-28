import React, { Component } from 'react'
import data from './../db'


class CommentList extends Component {
    render () {
      const elem = data.comments

      return (
        <div>
          {elem.map(s => (<ul>{s.text}</ul>))}
        </div>
        )
    }
}

export default CommentList

