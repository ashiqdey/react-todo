import React from 'react'


export const Todo = ({todo,onDelete}) => {
    return (
        <div >
            <h3 d-id={todo.id} onClick={() => {onDelete(todo.id)}}>{todo.title}</h3>
        </div>
    )
}
