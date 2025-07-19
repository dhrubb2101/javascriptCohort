import React from "react"
import { useState } from "react"

export function App(){
    const [message, setMessage] = useState("Loading...") //const[var,fn] = useState(initialValue)
    return (
        <div>
            <h1>welcome to chaicode </h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
        </div>    
    )
}