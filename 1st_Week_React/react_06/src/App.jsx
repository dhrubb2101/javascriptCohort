import React from "react"
import { useState } from "react"
import { set } from "zod"

export function App(){
    const [message, setMessage] = useState("Loading...") //const[var,fn] = useState(initialValue)

    useEffect(() => {
        fetch(`http://localhost:3000/api`)
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => setMessage("Error fetching data"))
        //there's no server set up here, so this will not work
    }, [])

    // setMessage("Loaded")
    setMessage(prev => prev + 1) //this is how you update the state in React, prev is the previous state
    //you should never code like above line also 
    
    return (
        <div>
            <h1>welcome to chaicode </h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
        </div>    
    )
}