import React, { Component } from "react";

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = { 
            editing: false,
            task: this.props.task
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        // take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({ editing: false})
    }

    handleDelete(){
        this.props.removeTodo(this.props.id)
    }

    toggleForm(){
        this.setState({ editing: !this.state.editing})
    }

    render(){
        return (
            <li>
                {this.state.editing 
                ? <form onSubmit={this.handleSubmit}>
                    <label>Edit todo: </label>
                    <input 
                        type="text" 
                        value={this.state.task}
                        name="task"
                        id="task"
                        onChange={this.handleChange}/>
                    <button>Save</button>
                </form>
                : <p>{ this.props.task }
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                </p>}
            </li>
        )
    }
}

export default Todo