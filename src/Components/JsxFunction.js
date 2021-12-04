import React from 'react'
import PropsBasic from "./PropsBasic"

const JsxFunction = () => {
    return(
        <div>
         <h1>This is for functional Jsx</h1>
         <PropsBasic location = "South" lattititude = "left" name = "Dinesh" />
         {/* <PropsBasic location = "North" lattititude = "right" /> */}
         {/* <PropsBasic>
             <h2>
             <p>this is a children prop</p>
             </h2>
         </PropsBasic> */}

        </div>
        
    ) 
}

//This code to write without JSX
// return React.createElement ('div',null, 'h1','This is for functional Jsx')

export default JsxFunction