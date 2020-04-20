import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  renderCards() {
    return this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 pt-3">
            <div className="card" key={todo.id}>
              <div className="card-header">{todo.title}</div>
                <div className="card-body">
                  <p> {todo.responsible} </p>
                  <p> {todo.description} </p>
                  <p> {todo.priority} </p>
                </div>
            </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation title="react"/>

        <div className="container">
          <div className="row">
            {this.renderCards()}
          </div>
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;
