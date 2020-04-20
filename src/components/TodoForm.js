import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data');
    }

    render() {
        return(
            <div className="card mt-4">
                <div className="card-header">New Task</div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" onChange={this.handleInput} name="title" placeholder="Title" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <input className="form-control" onChange={this.handleInput} name="responsible" placeholder="Responsible" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <input className="form-control" onChange={this.handleInput} name="description" placeholder="Description" type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={this.handleInput} name="priority">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}


export default TodoForm;