import { useCounter } from "../../hooks/useCounter"
import {useFetch } from "../../hooks/useFetch"
import  BlockQuote from "../03-examples/BlockQuote"
import { LoadingQuote } from "../03-examples/LoadingQuote"

export const Layaout = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]


    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {isLoading ? (<LoadingQuote />) : (<BlockQuote author={author} quote={quote} />)}

            <button className="btn btn-primary mt-2"
                onClick={increment}
                disabled={isLoading}>
                Next Quote {counter}
            </button>
        </>
    )
}
