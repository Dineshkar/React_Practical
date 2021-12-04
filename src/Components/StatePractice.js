import React ,{Component} from 'react'

class StatePractice extends Component {
    constructor(props){
        super(props)
            this.state = {
                count : 0
            }
    }

    Increment () {
        this.setState ({
            count : this.state.count+1 
        })
    }

    Decrement () {
         this.setState ({
             count: this.state.count-1
         })
    }
    render(){
        return(
            <div>
                {/* <h1>Counter Application</h1> */}
                <div>count - {this.state.count}</div>
                <button onClick = { () => this.Increment()}>Add</button>
                <button onClick = { () => this.Decrement()}>Minus</button>
            </div>
        )
    }
}

export default StatePractice