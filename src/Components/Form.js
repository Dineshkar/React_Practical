import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username : '',
              location : ''
         }
     }

     handleUsername = (event) => {
        this.setState ({
            username : event.target.value
        })
     }

     handleLocation = (event) => {
         this.setState ({
             location : event.target.value
         })

     }

     handleSubmit = (event) => {
        alert (`${this.state.username} ${this.state.location}`)
        event.preventDefault ()

     }
     
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <h2>Form Examples {this.state.username} and {this.state.location}</h2>
               <div>
                   <label>UserName</label>
                   <input type = "text"  value={this.state.username} onChange={this.handleUsername}/>
               </div>
               <div>
                   <label>Location</label>
                   <input type ="text" value={this.state.handleLocation} onChange ={this.handleLocation}/>
               </div>
               <div>
                   <button onClick={this.handleSubmit}>Submit</button>
               </div>
               <div>
                   <h1>{this.state.handleLocation}</h1>
               </div>
           </form>
        )
    } 
}

export default Form
