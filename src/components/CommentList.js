import React, { Component } from 'react'
import data from './../data'


const comments = data.comments;

class CommentList extends Component {
    render(){
        return (
            <ul>
                {comments.map(s => (<li>{s}</li>))}
            </ul>
        )
    }
}

export default CommentList
