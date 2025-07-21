import { useState } from 'react'
import { useContactForm } from './hooks/useContactForm'

function ContactForm() {
    const [form, setForm] = useState({name: "", email: "", message: ""})
    const { loading, successMessage, errorMessage, submitContact } = useContactForm()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h2>ContactForm</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message"></textarea>
                <button type="submit" disabled={loading} >
                    {loading ?  "Sending..." : "Send"}
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default ContactForm
