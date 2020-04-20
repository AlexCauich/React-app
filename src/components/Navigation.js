import React, { Component } from 'react';
import { todos } from '../todos.json';

class Navigation extends Component {   
    constructor() {
        super();
        this.state = {
          todos
        }
    }
     
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
                    { this.props.title }
                    <span className="badge badge-pill badge-light ml-2">
                        {this.state.todos.length}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;