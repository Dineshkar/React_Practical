import React, { Component } from 'react'

 class ConditionalRendering extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : true
         }
     }
     
    render() {
        //If else condition
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome to conditional rendering
        //         </div>
        //     )
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // Second Approach Using Element Variables
        // let Message;
        // if(this.state.isLoggedIn){
        //     Message = <div>Welcome to conditional Rendering</div>
        // }
        // else{
        //     Message = <div>Welcome Guest</div>
        // }

        // return <div>{Message}</div>

        //Third Approach Ternary Operators Using Conditional Rendering
        return (
            this.state.isLoggedIn ? 
            <div>Welcome to conditional rendering</div> : 
            <div>Welcome Guest</div>
        ) 
        
    }
}

export default ConditionalRendering
