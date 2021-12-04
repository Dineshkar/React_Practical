import React ,{Component} from 'react'

class StateComponent extends Component {

    constructor () {
        super()
        this.state = {
            Message : 'Welcome to learn State in React'
        }
    }

    Subcription () {
        this.setState({
            Message : 'Thanks for your intrest to learn React'
        })
    }

    Sub () {
        this.setState({
            Message : 'The End'
        })
    }

    render () {
        return (
            <div>
                <h1>
                    Hello All {this.state.Message}
                </h1>
                <button onClick = { () => this.Subcription()}>Subscribe</button>
                <div>
                    <button onClick = { () => this.Sub()}>
                        Share
                    </button>
                </div>
            </div>
        )
    }
}

export default StateComponent