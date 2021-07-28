import React, { Component } from 'react'

class CommentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")

    const body = e.target.comment.value

    fetch("http://localhost:3000/comments", {
      method: "POST",
      body: JSON.stringify(body)
    }).then((response) => {
      console.log(response)
      return response.json() // do something with response JSON
    })
  }

  render() {
    return (
      <div>
        <h1>What is your favorite breed?</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Answer: </label>
          <br />
          <textarea type="text" name="comment" />
          <br />
          <button type="reset">Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentForm
