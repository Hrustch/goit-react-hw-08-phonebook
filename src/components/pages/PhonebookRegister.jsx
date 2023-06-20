import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const PhonebookRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name){
            case 'name':
                setName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'pass':
                setPassword(value)
                break;
            default:
        }            
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log(name, email, password)
        dispatch(register({name, email, password}))
    }

  return (
    <>
    <h1>Registration</h1>
    <form onSubmit={handleSubmit}>
        <label>Login<input type="name" name={"name"} value={name} onChange={handleChange}/></label>
        <label>Email<input type='email' name={"email"} value={email} onChange={handleChange}/></label>
        <label>Password<input type='password' name={"pass"} value={password} onChange={handleChange}/></label>

        <button type='submit'>SignUp</button>
    </form>
    </>
  )
}
