import React, { Component } from 'react'

class Carbon extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.json')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    data: data.url
                })
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <h5>Co2 Emissions</h5>
                <h5>Co2 Per Capita</h5>
            </div>
        );
    }
}

export default Carbon