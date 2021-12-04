import React from 'react'

function ListRendering() {
    let names = ['Dinesh','Akshay','Anboli']
    return (
        <div>
            {/* <h1>List Rendering</h1>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            {
                names.map (name => <h2>{name}</h2>)
            }

        </div>
    )
}

export default ListRendering
