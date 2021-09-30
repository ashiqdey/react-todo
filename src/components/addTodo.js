import React, {useState} from 'react'

export const AddTodo = ({add_new_todo}) => {
    const [title, setTitle] = useState("")

    const submit = () => {
        e.preventDefault();

        add_new_todo(title);
    }
    return (
        <form onSubmit="add_new_todo">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button>Add todo</button>
        </form>
    )
}
