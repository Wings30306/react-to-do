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
            },
            ]
        }

        this.addNewItem = this.addNewItem.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }

    addNewItem(item) {
        let newItem={
            id: uuid(),
            task: item.task, 
            }

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

    update(id, updatedTask) {
        const updatedTodos = this.state.todoItems.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTask}
            }
            return todo;
        })
        this.setState({ todoItems: updatedTodos})
    }

    render(){
        return (
            <div>
                <h1>To Do List</h1>
                <ul>
                    {this.state.todoItems.map(
                    item => <Todo 
                        key={item.id} 
                        task={item.task} 
                        removeTodo={this.remove} 
                        updateTodo={this.update}
                        id={item.id}
                    />
                )}
                </ul>
                
                
                
                <TodoCreateForm addItem={this.addNewItem}/>

            </div>
        )
    }
}

export default TodoList