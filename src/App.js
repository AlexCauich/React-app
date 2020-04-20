/* en esta secion tenemos la logica de react en la cual podemos llamar varias funciones y representarlas */

//importamos todo a nesecitar 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';
// fin de importaciones 


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  renderCards() {
    return this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4" key={todo.id}>
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p> {todo.responsible} </p>
              <p><mark>{todo.description}</mark></p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation title="Tasks"/>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {this.renderCards()}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default App;
