import React, { Component } from 'react'
import MethodPropsChildren from './MethodPropsChildren'

 class MethodPropsParent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parent : "Parent"
         }

         this.welcomeParent = this.welcomeParent.bind(this)
     }

     welcomeParent (childParameter) {
         alert(`Hello ${this.state.parent} from ${childParameter}`)
     }
     
    render() {
        return (
            <div>
                {/* Adding the attribute welcome to create a props to call the data from parent to child using method as props  */}
                < MethodPropsChildren welcome = {this.welcomeParent} />
            </div>
        )
    }
}

export default MethodPropsParent
