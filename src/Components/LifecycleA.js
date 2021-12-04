import React, { Component } from 'react'
import LifecycleB from "./LifecycleB"

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Dineshkar'
         }
         console.log('Lifecycle A Constructor');
     }

     static getDerivedStateFromProps(props,state) {
         console.log('LifecycleA getDerivedStateFromProps');
         return null
     }

     componentDidMount() {
         console.log('LifecycleA componentDidMount');
     }

     shouldComponentUpdate (){
         console.log('LifecycleA shouldComponentUpdate');
         return true
     }
     
     getSnapshotBeforeUpdate(){ 
         console.log('LifecycleA getSnapshotBeforeUpdate ');
         return null
     }

     componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
     }

     changeState = () => {
         this.setState({
             name: 'Dk Dinesh'
         })
     }

    render() {
        console.log('Lifecycle A Render');
        return (
            <div>
            <div>LifeCycle A </div>
            <button onClick={this.changeState}>Changed</button>
            <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
