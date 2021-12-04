import React, { Component } from 'react'

// Approach Number 3 and 4 is good to go 

 class BindingEvent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Message : 'Hello'
         }

        //  3rd of Binding is to bind inside the Constructor
        this.clickEvent  = this.clickEvent.bind(this)
     }

     //In line number 14 you will get Error Cannot read the property setState of undefined 
     //(In this situation we need Event Binding in Class Components )
     clickEvent () {
         this.setState ({
             Message :  'GoodBye'
         })
     }

    //  4th way of Binding is to create a Arrow Function
     clickMe = () => {
         this.setState ({
             Message : 'Bye'
         })
     }
     
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {/* <button onClick = {this.clickEvent}>Message</button> */}
                {/* 1st way of binding */}
                <button onClick = {this.clickEvent.bind(this)}>Message</button>
                {/* 2nd way of Binding is to create Arrow Function in onClick Event */}
                <button onClick = {() => this.clickEvent()}>Click Message </button>
                {/* 3rd way of Binding in constructor */}
                <button onClick = {this.clickEvent}>Click Here </button>
                {/* 4th Way of Binding */}
                <button onClick = {this.clickMe}>Click Me </button>


            </div>
        )
    }
}

export default BindingEvent
