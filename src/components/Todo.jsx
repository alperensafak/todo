import React, {useState} from 'react'
import clsx from "clsx"
import {MdEdit, MdCancel } from "react-icons/md"
import {useTodoLayerValue} from "../context/TodoContext"


const Todo = ({todo}) => {
    const [{},dispatch]=useTodoLayerValue();
    const [editable, setEditable]=useState(false);
const [content, setContent] = useState(todo.content)

    const removeTodo = todoId => {
        dispatch({
            type:"REMOVE_TODO",
            payload:todoId
        })
        
    }

    const completeTodo = (todoId) =>{
        dispatch({
            type:"COMPLETE_TODO",
            payload:todoId
        })
    }

    const todoStyle = clsx({
        ["todo-row"]:true,
        ["completed"]: todo.isCompleted
    })
    return (
       
      
        <div className={todoStyle} >
            <div onClick={()=>{completeTodo(todo.id)}}>
                {
                    editable ? <input type:"text" value={} onChange={()=>{}}>:{todo.content}
                }
            </div>
            <div className="todo-icons">
<MdEdit  className="todo-icon"  onClick={()=>setEditable(true)}/>
<MdCancel  className="todo-icon" onClick={()=>removeTodo(todo.id)} />

            </div>
        </div>
    )
}

export default Todo
