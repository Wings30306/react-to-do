import React, { Component } from "react";
import Todo from "./Todo";
import TodoCreateForm from "./TodoCreateForm"

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            todoItems: []
        }

        this.addNewItem = this.addNewItem.bind(this)
    }

    addNewItem(item) {
        let newItem={
            name: item.name, 
            done: false, 
            editing: false }

        this.setState({
            todoItems: ...this.state.todoItems, newItem}
        )
    }

    render(){
        return (
            <div>
                <h1>To Do List</h1>

                <Todo addItem={this.addNewItem} 
                editing={item.editing}/>
                
                <TodoCreateForm/>

            </div>
        )
    }
}

export default TodoList