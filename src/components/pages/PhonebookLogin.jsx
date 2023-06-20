import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const PhonebookLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")
    const dispatch = useDispatch()


    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name){
            case 'email':
                setEmail(value)
                break;
            case 'pass':
                setPass(value)
                break;
            default:
        }            
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        dispatch(login({email, password}))
    }


  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <label>Email<input type='email' name={"email"} value={email} onChange={handleChange}/></label>
        <label>Password<input type='password' name={"pass"} value={password} onChange={handleChange}/></label>
        <button type='submit'>SignUp</button>
    </form>
    </>
  )
}
