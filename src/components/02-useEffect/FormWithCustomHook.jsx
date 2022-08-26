import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })


    return (
        <>
            <h5>Form With Custom Hook</h5>

            <input
                type="text"
                className="form-control"
                placeholder='username'
                name="username"
                value={username}
                onChange={onInputChange}
            ></input>
            <input
                type="email"
                className="form-control mt-2"
                placeholder='juan@google.com'
                name="email"
                value={email}
                onChange={onInputChange}
            ></input>
            <input
                type="password"
                className="form-control mt-2"
                placeholder='password'
                name="password"
                value={password}
                onChange={onInputChange}
            ></input>

            <button onClick={onResetForm} className='btn btn-primary m-1'>Reset</button>

        </>
    )
}
