//Component Mounting Lifecycle
import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Dineshkar'
         }
         console.log('LifecycleB Constructor');
     }

     static getDerivedStateFromProps(props,state) {
         console.log('LifecycleB getDerivedStateFromProps');
         return null
     }

     componentDidMount() {
         console.log('LifecycleB componentDidMount');
     }

     shouldComponentUpdate (){
        console.log('LifecycleB shouldComponentUpdate');
        return true
    }
    
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate ');
        return null
    }

    componentDidUpdate() {
       console.log('LifeCycleB componentDidUpdate');
    }
     
    render() {
        console.log('Lifecycle B Render');
        return (
            <div>LifeCycleB </div>
        )
    }
}

export default LifecycleB
