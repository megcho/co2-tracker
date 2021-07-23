import React, { Component } from 'react'
import './commentform.css';

class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    render(){
        return (
            <div>
            <h1>What is your favorite breed?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Answer: </label><br/>
                    <textarea type="text" name="body"/><br/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default CommentForm