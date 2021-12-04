import React from 'react'

const PropsBasic = (props) => {
    // console.log(props)
    return (
        <div>
            {/* <h1>Hello {props.name} from {props.City}</h1> */}
            <h2>Location is : {props.location} <br/> and the Lattitude is : {props.lattititude} <br /> The name is : {props.name} </h2>
            {/* <h1>children : {props.children}</h1> */}
            
        </div>
    )
}

export default PropsBasic
