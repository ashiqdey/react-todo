import React from 'react'
import { Todo } from './todo'


export const Todos = (props) => {
    return (
        <div>
            <h2>My todos</h2>
            {props.todos.map((e,index)=><Todo key={index} todo={e} onDelete={props.onDelete}/>)}
        </div>
    )
}
