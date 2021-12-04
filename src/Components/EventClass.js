import React, { Component } from 'react'

 class EventClass extends Component {

    handleClick () {
        alert("Button Clicked")
    }
    render() {
        return (
            <div>
                <h1>Event Handling in Class Based Components</h1>
                <button onClick = {this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default EventClass
