import { useState } from "react"
import { useMemo } from "react"
import { useCounter } from "../../hooks/useCounter"

const heavyStuff = (val = 100) => {
    for (let i = 0; i < val; i++) {
        console.log('Ahi vamos ...')
    }

    return `${val}`
}

export const MemoHook = () => {

    const { counter, increment, decrement } = useCounter(4000)
    const [show, setShow] = useState(true)
    const messageMemorize = useMemo( ()=> heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter:  <small></small> </h1>
            <hr/>
            <h4>{ messageMemorize }</h4>

            <button className="btn btn-primary"
                onClick={increment}>
                Next Quote {counter}
            </button>
        <br/>
            <button className="btn btn-outline-primary mt-1"
                onClick={()=>setShow(!show)}>
                Next Quote { JSON.stringify(show)}
            </button>
        </>
    )
}
