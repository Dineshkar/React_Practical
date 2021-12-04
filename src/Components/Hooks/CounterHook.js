import React, {useState} from 'react'

function CounterHook() {
    const [count,setCount] = useState(0)
    const [reset,setReset] = useState(0)

    function handleIncrease  () {
        setCount(count+1)
    }

    function handleDecreae () {
        if(count>0) 
        {
            setCount (count - 1)
        } 
        else {
            setCount(0)

        }
    }

    function handleReset () { 
        setReset(0)
        // e.preventDefault()
        
    }
    return (
        <div>
            <h1>Hooks Counter {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecreae}>Decrease</button>
            <button onClick={handleReset}>Reset</button>


        </div>
    )
}

export default CounterHook
