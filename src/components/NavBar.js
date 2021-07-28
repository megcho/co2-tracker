import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px', 
    padding: '12px', 
    margin: '0 6px 6px', 
    background: 'lightgreen', 
    textDecoration: 'none', 
    color: 'white'
}

class NavBar extends Component {
    render(){
        return (
            <div>
                <NavLink
                    to="/" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Home
                </NavLink>
                <NavLink
                    to="/commentform" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Comment Form
                </NavLink>
                                <NavLink
                    to="/commentlist" 
                    exact
                    style={link}
                    activeStyle={{
                        background: 'purple'
                    }}
                
                >
                    Comments
                </NavLink>
            </div>
        )
    }
}

export default NavBar