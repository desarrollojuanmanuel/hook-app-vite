import React from 'react'
import { useCounter } from "../../hooks/useCounter"
import { Small } from "./Small"

export const Memorizer1 = () => {

    const { counter, increment,  decrement} = useCounter(1)

    return (
        <>
            <h1>Counter: <Small counter={counter}/></h1>

            <button className="btn btn-primary"
                onClick={increment}>
                Next Quote {counter}
            </button>
            <br/>
            <button className="btn btn-primary mt-1"
                onClick={decrement}>
                Next Quote {counter}
            </button>
        </>
    )
}
