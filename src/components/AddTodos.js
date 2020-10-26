import React, { Component } from 'react';

class AddTodos extends Component {
    state = {
        id: '',
        task: ''
     }

     handleChange = (event) =>{
        this.setState({
            id: Date.now(),
            task: event.target.value,
        })
      }
      handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addTodos(this.state);
        this.setState({
            id: '',
            task: ''
        })
      }

    render() { 
    return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter your to do task" 
                    value={this.state.task} onChange={this.handleChange} required ></input>
                <button type="submit">Add</button>
            </form>
        );
    }
}
 
export default AddTodos;