import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: ''
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("form state cambio")
    }, [username])


    return (
        <>
            <h5>Simple Form</h5>

            <input
                type="text"
                className="form-control"
                placeholder='username'
                name="username"
                value={username}
                onChange={onInputChange}
            ></input>
            {(username === 'strider2') && <Message />}
            <input
                type="email"
                className="form-control mt-2"
                placeholder='juan@google.com'
                name="email"
                value={email}
                onChange={onInputChange}
            ></input>

        </>
    )
}
