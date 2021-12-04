import React ,{Component} from 'react'

class StateCalc extends Component {
    constructor(props){
        super(props)
        this.state = {
            Count : 0
        }
    }

    Addition () {
        this.setState({
            Count : this.state.Count + 1
        })
        
    }

    Subtraction () {
        this.setState ({
            Count : this.state.Count - 1
        })

    }

    Multiplication () {
        this.setState ({
            Count : this.state.Count*2
        })

    }

    Division () {
        this.setState ({
            Count : this.state.Count / 2
        })

    }


    render(){
        return (
            <div>
                <h1>
                   Calculator App - {this.state.Count}
                </h1>
                <button onClick = { () => this.Addition()}>Add</button>
                <button onClick = { () => this.Subtraction()}>Minus</button>
                <button onClick = { () => this.Multiplication()}>Multiply</button>
                <button onClick = { () => this.Division()}>Divide</button> 
            </div>
        )
    }
}

export default StateCalc