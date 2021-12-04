import React, {Component} from 'react'

class SetState extends Component {
    constructor(props){
        super(props)
        this.state = {
            Count: 0
        }
    }

    Increment () {
        this.setState({
            Count : this.state.Count + 1
        })
    }
       
    render() {
       
        return (
            <div>
                <div>Count - {this.state.Count}</div>
                <button onClick = { () => this.Increment() }>Add</button>
            </div>
        )
    }
}

export default SetState