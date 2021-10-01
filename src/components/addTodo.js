import React, {useState} from 'react'

export const AddTodo = ({add_new_todo}) => {
    const [title, setTitle] = useState("")

    const submit = (e) => {
        e.preventDefault();

        //add new title to the array
        add_new_todo(title);

        //reset ttile
        setTitle("")
    }
    return (
        <form onSubmit={submit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button>Add todo</button>
        </form>
    )
}


