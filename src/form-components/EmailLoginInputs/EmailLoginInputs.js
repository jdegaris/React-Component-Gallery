import React, { Fragment, useState} from 'react'
import './EmailLoginInputs.css'

const EmailLoginInputs = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    // Redirect if logged in - insert var name to check auth and redirect location

    // if (isAuthenticated) {
    //     return <Redirect to="/" />
    // }

    const onSubmit = (e) => {
        e.preventDefault()

        // INSERT LOGIN NAME FUNCTION
        // login(email, password)
    } 

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
    return (
        <Fragment>
            <form className="" onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    className=""
                    type="email" 
                    name="email" 
                    onChange={onChange}
                    autoComplete='on'
                    required
                    />
                <label htmlFor="password">Password</label>
                <input 
                    className=""
                    type="password" 
                    name="password" 
                    onChange={onChange}
                    autoComplete='on'
                    required
                    />
                <button className="" type="submit">Login</button>
            </form>
        </Fragment>
    )
}

export default EmailLoginInputs
