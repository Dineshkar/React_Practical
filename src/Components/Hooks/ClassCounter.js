import React, { Component } from 'react'

 class ClassCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count : 0
         }
     }

     handleIncrease = () => {
         this.setState({
             count:(this.state.count+1)
         })
     }

     handleDecrease = () => {
         if(this.count>0){
            this.setState({
                count:(this.state.count-1)
            })
         }
         else{
             this.setState({
                 count:0
             })
         }
       
    }
     
    render() {
        return (
            <div>
                <h1>Class Counter {this.state.count}</h1>
                <button onClick = {this.handleIncrease}>Increase</button>
                <button onClick = {this.handleDecrease}>Decrease</button>

            </div>
        )
    }
}

export default ClassCounter
