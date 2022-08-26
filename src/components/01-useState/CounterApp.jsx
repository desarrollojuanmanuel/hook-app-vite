import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20
    })

    const { counter1, counter2 } = state
    return (
        <>
            <h5> Counter  hook </h5>
            <h1>Counter 1: {counter1} </h1>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter1: counter1 + 1,
            })}>+ 1</button>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter1: counter1 - 1,
            })}>- 1</button>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter1: 0,
            })}>Reset</button>
            <h1>Counter 2: {counter2} </h1>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter2: counter2 + 1,
            })}>+ 1</button>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter2: counter2 - 1,
            })}>- 1</button>
            <button className="btn btn-light" onClick={() => setCounter({
                ...state,
                counter2: 0,
            })}>Reset</button>


        </>
    )
}
