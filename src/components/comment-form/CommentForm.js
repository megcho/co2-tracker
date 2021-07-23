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
            <h1>What do you think about the pups?</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment: </label><br/>
                    <textarea type="text" name="body"/><br/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

export default CommentForm