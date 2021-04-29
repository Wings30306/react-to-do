import React, { Component } from "react";
import Todo from "./Todo";
import TodoCreateForm from "./TodoCreateForm"
import uuid from "uuid/dist/v4"

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            todoItems: [{
                id: uuid(),
                task: "Create To Do App", 
                done: false, 
                editing: false },]
        }

        this.addNewItem = this.addNewItem.bind(this)
        this.remove = this.remove.bind(this)
    }

    addNewItem(item) {
        let newItem={
            id: uuid(),
            task: item.task, 
            done: false, 
            editing: false }

        this.setState({
            todoItems: [...this.state.todoItems, newItem]
            }
        )
    }

    remove(id){
        this.setState({
            todoItems: this.state.todoItems.filter(t => t.id !== id)
        })
    }

    render(){
        return (
            <div>
                <h1>To Do List</h1>
                <ul>
                    {this.state.todoItems.map(
                    item => <Todo key={item.id} editing={item.editing} task={item.task} removeTodo={this.remove} id={item.id}/>
                )}
                </ul>
                
                
                
                <TodoCreateForm addItem={this.addNewItem}/>

            </div>
        )
    }
}

export default TodoList