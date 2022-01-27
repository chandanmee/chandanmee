import React from 'react'
import TodoItem from '../MyComponents/TodoItem';

export const Todos = (props) => {
    let myStyle={
        minHeight:"33vh"
    }
    return (
        <div className="container" style={myStyle}>
            <h3>To Do List</h3>
     {props.todos.length===0?"No Todos To Display":
     props.todos.map((todo)=>{
         return(
            
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
     
         )
     })}
   
        </div>
    )
}
export default Todos;