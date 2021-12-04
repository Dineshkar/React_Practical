import React, {useState} from 'react'

function HooksExample() {

    const [count,setCount] = useState(0)

   const Increment = () => {
        setCount(count+1)
    }

   const Decrement = () => {
       if(count>0) {
        setCount(count-1)
       }
       else {
           setCount(0)
       }
    }

    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick = {Increment}>Increase</button>
            <button onClick = {Decrement}>Decrease</button>

        </div>
    )
}

export default HooksExample
