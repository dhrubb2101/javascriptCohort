import { useState, useEffect } from 'react'

export function ChaiMenu(){
    const [menu, setMenu] = useState([])
    const[error,setError] = useState("")
    useEffect(() => {
        fetch("/api/AllChai")
            .then(response => response.json())
            .then(data => setMenu(data))
            .catch(err => setError(err.message))
    }, [])

    return (
        <div>
            <h2>Available Chai</h2>
            <ul>
                {menu.map(chai => (
                    <li key={chai.name} >{chai.name}</li>
                ))}
            </ul>
        </div>
    )

}

