import { useCounter } from "../../hooks/useCounter"
import { useFetch } from "../../hooks/useFetch"
import BlockQuote from "./BlockQuote"
import { LoadingQuote } from "./LoadingQuote"

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]


    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {isLoading ? (<LoadingQuote />) : (<BlockQuote author={author} quote={quote} />)}

            <button className="btn btn-primary"
                onClick={increment}
                disabled={isLoading}>
                Next Quote {counter}
            </button>
        </>
    )
}
