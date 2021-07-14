import React, { Component } from 'react'

class Carbon extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         word: '', 
    //         definition: '', 
    //         pronunciation: ''
    //     }
    // }

    // componentDidMount(){
    //     this.fetchWord()
    // }


    fetchData = () => {
        fetch(`https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.json`)
        .then(res => res.json())
        .then(data => {
            const info = data
            this.setState({
                carbon: info.co2[1], 
                capita: info.co2_per_capita, 
            })
        })
    }


    render(){
        return (
            <div>
                {/* <h1>co2: {this.state.carbon}</h1>
                <h3>co2 per capita: {this.state.capita}</h3> */}
                <button onClick={this.fetchWord}>Try a different word!</button>
            </div>
        )
    }
}

export default Carbon