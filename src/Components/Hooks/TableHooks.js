import React, {useState} from 'react'

function TableHooks() {
    const [name,setName] = useState('');
    const [names,setNames] = useState([]);


    function handleName (e) {
        setName(e.target.value)
    }

    function addName (e) {
        e.preventDefault()
        // setNames([...names, {id:names.length,name}])
        setNames([...names, {name}])

        setName('')
    }
    return (
        <div>
            <form onSubmit={addName}>
                <input type = "text" value ={name} onChange={handleName} />
                <button>submit</button>
            </form>
            <hr></hr>
            <u1>
                {names.map((item)=> (
                    // <li key = {item.id}>{item.name}</li>
                    <li>{item.name}</li> 

                ))}
            </u1>
        </div>
    )
}

export default TableHooks
