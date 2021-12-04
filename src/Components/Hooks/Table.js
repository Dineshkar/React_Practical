import React, { useState } from 'react'

function Table() {
    const [todo,setTodo] = useState('')
    const [submit,setSubmit] = useState(false);

    const handleTodo = (e) => {
        setTodo (e.target.value)
    } 

    const handleSubmit = (e) => {
        setSubmit(true)
        e.preventDefault()
    }
    return (
        <div>
            <input type = "text" value = {todo} onChange={handleTodo} />
            <button onClick={handleSubmit}>Submit</button>
            <hr/>
            {
                submit ?
                <h1>{todo}</h1> : 
                null
            }
            
        </div>
    )
}

export default Table
