import React, { Component } from 'react'
import './commentform.css';

class CommentForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
			

    render(){
        fetch('http://localhost:3001/comments', {
            method: 'POST',
            body: JSON.stringify(this.state)
            }).then(function(response) {
                console.log(response)
                return response.json()
                })
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


// import React, { Component } from ‘react’;
// import ‘./App.css’;
// export default class App extends Component{
// constructor(){
// super();
// this.state={ name:’’, email:’’ }
// }
// handleChange = event =>{
// this.setState({ [event.target.name]:event.target.value })
// }
// handleSubmit = event =>{
// event.preventDefault();
// console.log(“User name : “ + this.state.name)
// console.log(“User Email : “ + this.state.email)
// const url =”https://jsonplaceholder.typicode.com/users/”
// const data = { name:this.state.name, email:this.state.email }
// fetch(url, { method: ‘POST’, // or ‘PUT’
// body: JSON.stringify(data), // data can be `string` or {object}!
// headers:{ ‘Content-Type’: ‘application/json’ } })
// .then(res => res.json())
// .catch(error => console.error(‘Error:’, error))
// .then(response => console.log(‘Success:’, response)); }
// render(){
// return(
// <form onSubmit={this.handleSubmit}>
// <input type=”text” name=”name” onChange={this.handleChange} />
// <input type=”email” name=”email” onChange={this.handleChange} />
// <input type=”submit” value=”Add user” /> </form> )
// }
// }
