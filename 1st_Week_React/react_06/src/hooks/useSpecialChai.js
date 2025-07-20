import { useState, useEffect }  from 'react'

export function useSpecialChai(){
    const [chai, setChai] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        fetch("/api/special-chai")
        .then((res) => {
            if(!res.ok) throw new Error("Failed to fetch Special Chai")
                return res.json()
        })
        .then((data) => {
            setChai(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message || "Something went wrong")
            setLoading(false)
        })
    }, [])

    if(loading) return <h2>loading...</h2>
    if(error) return <h2>Error: {error}</h2>
    
    return { chai, loading, error }
}