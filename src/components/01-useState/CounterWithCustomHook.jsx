import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(1)

    return (
        <>
            <h5> Counter With hook: {counter} </h5>
            <button className="btn btn-light" onClick={increment}>+1</button>
            <button className="btn btn-light" onClick={reset}>Reset</button>
            <button className="btn btn-light" onClick={decrement}>-1</button>
        </>
    )
}
