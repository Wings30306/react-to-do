import React, { Component } from "react";
import TodoEditForm from "./TodoEditForm"

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div>
                {this.props.editing ? <TodoEditForm /> : <p>To Do Item with icons</p>}
            </div>
        )
    }
}

export default Todo