import React, { Component } from 'react'

class HooksForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:''
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState ({
            email : e.target.value
        })
    }

    handleSubmit = (event) => {
        alert (`username is ${this.state.name} and EmailId is ${this.state.email}`)
        event.preventDefault()

    }
    
    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
           <div>
               <h1>UserName {this.state.name} <br /> Email {this.state.email}</h1>
               <label>Enter Name</label> 
               <input type = "text" value ={this.state.name} onChange ={this.handleName}/>
               <br />
               <div>
                   <label>Email</label>
                   <input type = "text" value = {this.state.email} onChange = {this.handleEmail}/>
               </div>
               <button onClick ={this.handleSubmit}>submit</button>
           </div>
           </form>
        )
    }
}

export default HooksForm
