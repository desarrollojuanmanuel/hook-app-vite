import { useCallback } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback((val) => { setCounter(c => c + val) }, [],)

    return (
        <>
            <h1> UseCallbak Hook {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}
