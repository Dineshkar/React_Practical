import React from 'react'

function MethodPropsChildren(props) {
    return (
        <div>
            <h1>Passing Parameter from Parent to child </h1>
            <button onClick ={props.welcome}>Click Parent</button>
            {/* To pass the data or parameter from the child to parent we should use Arrow function */}
            <h1>Passing Parameter from Child to Parent</h1>
            <button onClick ={() => props.welcome('Child')}>Click Parent</button>

        </div>
    )
}

export default MethodPropsChildren
