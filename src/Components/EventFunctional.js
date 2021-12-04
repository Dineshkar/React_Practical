import React from 'react'

function EventFunctional() {

    function handleClick  () {
        alert("Button Clicked")
    }
    return (
        <div>
            <h1>Event Handling in Functional Components</h1>
            <button onClick = {handleClick}>click</button>
            
        </div>
    )
}

export default EventFunctional
