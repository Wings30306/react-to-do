import React, { Component } from "react";
import TodoEditForm from "./TodoEditForm"

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {}
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        this.props.removeTodo(this.props.id)
    }

    render(){
        return (
            <li>
                {this.props.editing ? <TodoEditForm /> : <p>{ this.props.task }
                <button>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                </p>}
            </li>
        )
    }
}

export default Todo