import React, {useState} from 'react'

function HookFormsTwo() {
    const [user,setUser] = useState('')
    const [submit,setSubmit] = useState(false)
    const [email,setEmail] = useState('')



     function handleName  (e) {
        setUser (e.target.value)
        setSubmit(false)
    }

    function handleSubmit (event) {
        setSubmit(true)
        event.preventDefault()
        }

    function handleEmail (event) {
        setEmail (event.target.value)
    }
    return (
        
       <form>
           <div>
               {
                   submit ?
                   <h1>{user}<br/>{email}</h1>
                   : null

               }
               <label>UserName</label>
               <input type = "text" value = {user} onChange={handleName}/>
               <br />
               <label>EmailId</label>
               <input type = "text" value = {email} onChange={handleEmail}/>
               {/* <button onClick = {()=>setSubmit(true)}>Submit</button> */}
               <br />
               <button onClick = {handleSubmit}>Submit</button>

           </div>
       </form>
    )
}

export default HookFormsTwo
