import React from 'react';
import ListTodos from "./components/ListTodos"
import AddTodos from "./components/AddTodos"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faTrash} from "@fortawesome/free-solid-svg-icons"

library.add(faTrash)

class App extends React.Component{
  state={
    todos: [ 
      { id: '1', task: 'Go to school'},
      {id: '2', task: 'Prep for exam'}
    ]
  }

  addTodos=(newTodo)=>{
    const todos=[...this.state.todos, newTodo]
    this.setState({
      todos
    })

  }

  deleteTodo=(id)=>{
    const todos= this.state.todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
      todos
    })
  }
  editTodo=(task, id)=>{
    const todos = this.state.todos;
    todos.map(todo=>{
      return (todo.id===id) && (todo.task= task)
    })
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App">
        <h1>5 Stack To do App</h1>
        <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo} 
        editTodo={this.editTodo} />
        <AddTodos addTodos={this.addTodos} />

      </div>
    );
  }
}

export default App;
