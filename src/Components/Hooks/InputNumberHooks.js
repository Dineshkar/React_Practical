import React, {useState} from 'react'

function InputNumberHooks() {
    const [num1,setNum1] = useState (null)
    const [num2,setNum2] = useState (null)
    const [add,setAdd] = useState (false)

    

    const handleNum1 = (e) => {
        setNum1(parseInt(e.target.value))
    }

    const handleNum2 = (e) => {
        setNum2(parseInt(e.target.value))
    }

    const handleAdd = (e) => {
        setAdd(true)
        e.preventDefault()
    }
    
    return (
        <form>
            <div>
                {
                    add ?
                    <h1>Entered Number is {num1 + num2}</h1>
                    : null
                }
                <label>number 1 </label>
                <input type ="number" value ={num1} placeholder='Enter Number' onChange={handleNum1} />
                <br />
                <label>number 2 </label>
                <input type ="number" value ={num2} placeholder='Enter Number' onChange={handleNum2} />
                <br />

                <button onClick = {handleAdd}>Add</button>

            </div>
        </form>
    )
}

export default InputNumberHooks
