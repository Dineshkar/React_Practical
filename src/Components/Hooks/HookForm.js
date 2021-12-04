import React, {useState} from 'react'

function HookForm() {
    const [user,setUser] = useState('')
    const [password,setPassword]= useState('')
    const [submit,setSubmit]= useState(false)


    const handleUsername = (e) => {
        setUser (e.target.value)
    }

    const handlePassword = (e) => {
        setPassword (e.target.value)
    }

    const handleSubmit = (event) => {
        setSubmit (true)
        event.preventDefault()
    }
    
    return (
       <form>
           <div>
               {
                   submit ?
                   <h1>{user}<br />{password}</h1>
                   : null
               }
               <label>Enter user name </label>
               <input type ="text" value = {user} onChange={handleUsername} />
               <br />
               <label>Enter Password </label>
               <input type ="password" value = {password} onChange={handlePassword} />
               <br />
               <button onClick={handleSubmit}>Submit</button>

           </div>
       </form>
    )
}

export default HookForm
