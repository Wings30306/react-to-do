import React, { Component } from "react";

class TodoCreateForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        this.props.addItem(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default TodoCreateForm