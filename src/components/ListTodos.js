import React from "react"
// import "./ListItems.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import FlipMove from "react-flip-move"


const ListTodos= ({todos, deleteTodo, editTodo}) => {
    const TodoItems = todos.length ? todos.map(todo => {
        return (
            <div className="list" key={todo.id}>
                <p>
                <input type="text" value={ todo.task } 
                onChange={(event)=>editTodo(event.target.value, todo.id)} ></input>
                <span><FontAwesomeIcon className="faIcons" 
                icon="trash" onClick={()=>deleteTodo(todo.id)} /></span></p>
            </div> 
        )} 
        ) : <p> There are currently no tasks to be done.</p>
               
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {TodoItems}
            </FlipMove>
        </div>

    )
}
export default ListTodos
